import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';

const Layout = () => {
  const { pathname } = useLocation();
  const hasToken = pathname === '/todo';

  return (
    <>
      {hasToken ? <Header /> : ''}
      <main className="flex items-center justify-center h-screen bg-gray-100">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
