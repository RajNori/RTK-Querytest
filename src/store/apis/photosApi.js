import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { faker } from '@faker-js/faker';

const photosApi = createApi({
    reducerPath: 'photos',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3005/',
    }),
    endpoints: (builder) => ({
        fetchPhotos: builder.query({
            query: (album) => ({
                url: '/photos',
                params: {
                    albumId: album.id,
                },
                method: 'GET',
            }),
        }),
        addPhoto: builder.mutation({
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
