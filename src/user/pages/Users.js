import React from 'react';
import UserList from '../components/UserList';

const Users = () => {
  const USERS = [
    {
      id:'ui', 
      name:'Max', 
      image:'https://static.wikia.nocookie.net/orange-is-the-new-black/images/d/d9/StellaCarlin.jpg/revision/latest?cb=20180720010229', 
      places: 3
    }
  ];

  return <UserList items={USERS} />;
};

export default Users;
