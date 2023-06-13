import { useAddAlbumMutation, useFetchAlbumsQuery } from '../store';
import Skeleton from './Skeleton';
import AlbumsListItem from './AlbumsListItem';
import Button from './Button';
let content;

function AlbumsList({ user }) {
    //query hook 👇
    const { data, error, isLoading } = useFetchAlbumsQuery(user);
    //mutation hook 👇
    const [addAlbum, result] = useAddAlbumMutation();
    console.log(result);
    const handleAddAlbum = () => {
        addAlbum(user);
        console.log(result);
    };
    if (isLoading) {
        content = <Skeleton times={3} className='w-1/2' />;
    } else if (error) {
        content = <div className='text-red-500'>Error fetching albums</div>;
    } else {
        content = data.map((album) => {
        return <AlbumsListItem key={album.id} album={album} />;
        });
    }

    return (
        <div>
            <div className='m-2 flex flex-row items-centre justify-between'>
                <h3 className='text-lg font-bold'>Albums for {user.name}</h3>
                <Button loading={result.isLoading} onClick={handleAddAlbum}>+ Add Album</Button>
            </div>
            <div>{content}</div>
        </div>
    );
}
export default AlbumsList;
