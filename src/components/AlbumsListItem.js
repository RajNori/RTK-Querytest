import Button from './Button';
import ExpandablePanel from './ExpandablePanel';
import { useRemoveAlbumMutation } from '../store';
import PhotosList from './PhotosList';
import { GoTrashcan } from 'react-icons/go';

function AlbumsListItem({ album }) {
    const [removeAlbum, result] = useRemoveAlbumMutation();
    const handleRemoveAlbum = () => {
        removeAlbum(album);
    };
    const header = (
        <div className='flex flex-row justify-between content-center'>
            <Button
                className='mr-2'
                loading={result.isLoading}
                onClick={handleRemoveAlbum}>
                <GoTrashcan />
            </Button>
            <div>{album.title}</div>
        </div>
    );
    return (
        <ExpandablePanel key={album.id} header={header}>
            <PhotosList album={album} />
        </ExpandablePanel>
    );
}
export default AlbumsListItem;
