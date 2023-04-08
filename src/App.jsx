import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import Root from 'pages/Root';
import LoginPage from 'pages/Login';
import SignUpPage from 'pages/SignUp';
import Todo from 'pages/Todo';

import AuthenticatedRoute from 'components/AuthenticatedRoute';

const routes = createRoutesFromElements(
  <>
    <Route path="/" element={<Root />} />
    <Route path="/signin" element={<LoginPage />} />
    <Route path="/signup" element={<SignUpPage />} />
    <Route path="/todo" element={<AuthenticatedRoute />}>
      <Route index element={<Todo />} />
    </Route>
  </>,
);

const App = () => {
  return <RouterProvider router={createBrowserRouter(routes)} />;
};

export default App;
