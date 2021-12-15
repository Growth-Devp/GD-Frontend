import { useUser } from 'context/userContext';
import React from 'react';

const PrivateComponent = ({ roleList, status,  children }) => {
  const { userData } = useUser();

  if (roleList.includes(userData.rol && userData.estado)) {
    return children;
  }

  return <></>;
};

export default PrivateComponent;
