import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import Home from 'pages/Home';
import LoginPage from 'pages/Login';
import SignUpPage from 'pages/SignUp';

import AuthenticatedRoute from 'components/AuthenticatedRoute';

const routes = createRoutesFromElements(
  <>
    <Route path="/" element={<AuthenticatedRoute />}>
      <Route index element={<Home />} />
    </Route>
    <Route path="/signin" element={<LoginPage />} />
    <Route path="/signup" element={<SignUpPage />} />
  </>,
);

const App = () => {
  return <RouterProvider router={createBrowserRouter(routes)} />;
};

export default App;
