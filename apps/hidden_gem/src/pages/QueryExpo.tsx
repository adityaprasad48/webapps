import AddUser from '@/comp/Query_Expo/AddUser';
import InfintePosts from '@/comp/Query_Expo/InfintePosts';
import UserList from '@/comp/Query_Expo/UserList';
import Modal from '@/Modal';
import { useState } from 'react';

const QueryExpo = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
       <button
        onClick={() => setIsOpen(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        Open Modal
      </button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2 className="text-xl font-bold text-gray-800">Hello from Modal! 🎉</h2>
        <p className="text-gray-600 mt-2">This is a modal using React Portal.</p>
      </Modal>
      <UserList/>
      <AddUser/>
      <InfintePosts/>
    </div>
  )
}

export default QueryExpo