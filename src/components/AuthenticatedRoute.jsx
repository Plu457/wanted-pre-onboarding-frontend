import { Navigate, Outlet } from 'react-router-dom';
import { Constants } from 'commons';
import { Storage } from 'utils';

const AuthenticatedRoute = () => {
  const isAuthorized = !!Storage.getAuthToken({ name: Constants.AuthTokenName });

  return isAuthorized ? <Outlet /> : <Navigate to="/signin" />;
};

export default AuthenticatedRoute;
