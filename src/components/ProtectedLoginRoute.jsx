import { Navigate } from 'react-router-dom';
import { Constants } from 'commons';
import { Storage } from 'utils';

const ProtectedLoginRoute = ({ element }) => {
  const isAuthorized = !!Storage.getAuthToken({ name: Constants.AuthTokenName });

  return isAuthorized ? <Navigate to="/todo" /> : element;
};

export default ProtectedLoginRoute;
