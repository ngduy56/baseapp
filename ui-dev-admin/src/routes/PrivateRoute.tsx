import { FC } from 'react';
import { Navigate } from 'react-router-dom';

interface Props {
  children: JSX.Element;
}

const PrivateRoute: FC<Props> = ({ children }) => {
  const accessToken = '';
  if (!accessToken) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default PrivateRoute;
