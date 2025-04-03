import AddUser from '@/comp/Query_Expo/AddUser';
import InfintePosts from '@/comp/Query_Expo/InfintePosts';
import UserList from '@/comp/Query_Expo/UserList';

const QueryExpo = () => {
  return (
    <div>
      <UserList/>
      <AddUser/>
      <InfintePosts/>
    </div>
  )
}

export default QueryExpo