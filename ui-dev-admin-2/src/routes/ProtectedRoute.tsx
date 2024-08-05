import { Navigate } from "react-router-dom";
import { useAppSelector } from "app/hooks";
import { accessTokenSelector } from "app/selectors";

type Props = {
  children: JSX.Element;
};

const ProtectedRoute = ({ children }: Props) => {
  const accessToken = useAppSelector(accessTokenSelector);
  // if (!accessToken) {
  //   return <Navigate to="/account/login" />;
  // }
  return children;
};

export default ProtectedRoute;
