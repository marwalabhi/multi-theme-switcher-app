import { Outlet } from 'react-router';
import Header from '../Header/Header';

const Body = () => {
  return (
    <div className="font-inter flex min-h-screen flex-col">
      <Header />
      <main className="mx-auto mt-16 max-w-7xl px-6 py-8">
        <Outlet />
      </main>
    </div>
  );
};

export default Body;
