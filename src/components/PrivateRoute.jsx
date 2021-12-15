import { useUser } from 'context/userContext';
import React from 'react';

const PrivateRoute = ({ roleList, status, children }) => {
  const { userData } = useUser();
  const pass = roleList.includes(userData.rol) && status.includes(userData.estado)
  if (roleList.includes(userData.rol)) {
    return children;
  }

  return <div className='text-9xl text-red-500 '>No estás autorizado para ver este sitio.</div>;
};

export default PrivateRoute;
