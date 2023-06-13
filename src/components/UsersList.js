import { useEffect} from 'react';
import { useSelector } from 'react-redux';
import { fetchUsers, addUser } from '../store';
import Button from './Button';
import Skeleton from './Skeleton';
import {useThunk} from './hooks/use-thunk';
import UsersListItem from './UsersListItem';


function UsersList() {
    const [doFetchUsers, isLoadingUsers, loadingUsersError] = useThunk(fetchUsers);
    const [doCreateUser, isCreatingUser, creatingUserError] = useThunk(addUser);
    const { data } = useSelector((state) => {
        return state.users;
    });

    useEffect(() => {
        doFetchUsers();
    }, [doFetchUsers]);

    const handleUserAdd = () => {
        doCreateUser();
    };
    let content;
    if (isLoadingUsers) {
         content =  <Skeleton times={6} className='h-10 w-full' />;
           }
    if (loadingUsersError) {
       content = <div>Error Fetching data ...</div>;
       }
       else {
        content = data.map((user) => {
          return  <UsersListItem key={user.id} user={user} /> })
       }
    return (
        <div className='flex flex-col justify-between m-3'>
            <div className='flex flex-row justify-between'>
            <h1 className='m-2 text-xl'>User</h1>
            <Button loading={isCreatingUser} onClick={handleUserAdd} className='m-2 w-1/5 text-center text-sm bg-slate-300 rounded-lg'> + &nbsp; <br /> <em>Add Users</em> </Button>
            </div>
         
            {creatingUserError && 'Error creating user'}
            {content}
        </div>
    );
}
export default UsersList;
