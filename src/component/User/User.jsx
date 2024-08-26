import React from 'react';
import { useParams} from 'react-router-dom';


function User() {
    const {userId} = useParams();

  return (
    <div>
      <h1 className="text-white bg-gray-600 text-3xl font-sans px-4 py-2">User : {userId}</h1>
    </div>
  );
}

export default User;
