import { GoTrashcan } from 'react-icons/go';
import { removeUser } from '../store';
import { useThunk } from './hooks/use-thunk';
import ExpandablePanel from './ExpandablePanel';
import AlbumsList from './AlbumsList';

const UsersListItem = ({ user }) => {
    const [doRemoveUser, isLoading, error] = useThunk(removeUser);
    const handleClick = () => doRemoveUser(user);

    const header = <><button
                className='mr-3'
                loading={isLoading ? 0 : 1}
                onClick={handleClick}>
                <GoTrashcan />
            </button>
            {error && <div>Error Removing User</div>}
            {user.name}
        </>;
        
    return (<ExpandablePanel header={header}><AlbumsList user={user}/></ExpandablePanel>);
};
export default UsersListItem;
