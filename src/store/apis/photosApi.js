import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { faker } from '@faker-js/faker';

const photosApi = createApi({
    reducerPath: 'photos',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3005/',
    }),
    endpoints: (builder) => ({
        fetchPhotos: builder.query({
         providesTags: (result, error, album) => {
           const tags = result.map((photo) => ({
             type: 'Photo',
             id: photo.id,
           }),);
           tags.push({type: 'AlbumPhoto', id: album.id});
           return tags;
         },
            query: (album) => ({
                url: '/photos',
                params: {
                    albumId: album.id,
                },
                method: 'GET',
            }),
        }),
        addPhoto: builder.mutation({
            invalidatesTags: (result, error, album) => {
                return [{ type: 'AlbumPhoto', id: album.id }];
            },
            query: (album) => ({
                url: '/photos',
                method: 'POST',
                body: {
                    albumId: album.id,
                    url: faker.image.urlLoremFlickr({ category: 'transport' }),
                },
            }),
        }),
        removePhoto: builder.mutation({
            invalidatesTags: (result, error, photo) => {
                return [{ type: 'Photo', id: photo.id }];
            },
            query: (photo) => ({
                method: 'DELETE',
                url: `/photos/${photo.id}`,
            }),
        }),
    }),
});

export const {
    useFetchPhotosQuery,
    useAddPhotoMutation,
    useRemovePhotoMutation,
} = photosApi;
export { photosApi };
