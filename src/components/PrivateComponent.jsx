import { useUser } from 'context/userContext';
import React from 'react';

const PrivateComponent = ({ roleList, children }) => {
  const { userData } = useUser();
  const pass = roleList.includes(userData.rol)
  if (pass) {
    return children;
  }
  return <></>;
};
export default PrivateComponent;
