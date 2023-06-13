import { useFetchPhotosQuery, useAddPhotoMutation } from '../store';
import Button from './Button';
import { GoPlus } from 'react-icons/go';
import Skeleton from './Skeleton';
import PhotosListItem from './PhotosListItem';
function PhotosList({ album }) {
    useFetchPhotosQuery(album);
    const {data, isFectching,error} = useFetchPhotosQuery(album);
    const [addPhoto, addPhotoResults] = useAddPhotoMutation();

    const handleAddPhoto = () => {
        addPhoto(album);
    };
    let content;
    if (isFectching) {
     content = <Skeleton className='h-8 w-8' times={4} />;
    }else if(error){
        content = <p className='text-red-500 font-bold'>Error</p>;
    }
    else{
     content = data.map((photo) => {
      return <PhotosListItem key={photo.id} photo={photo} />
    });
    }
    return (
        <div>
            <div className='m-2 flex flex-row item-center justify-between'>
                <h3 className='text-lg font-bold'>{album.title}</h3>
                <Button
                    loading={addPhotoResults.isLoading}
                    onClick={handleAddPhoto}>
                   <GoPlus />
                </Button>
            </div>
            <div>{content}</div>
        </div>
    );
}
export default PhotosList;
