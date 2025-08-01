import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Header/Header';

const Body = () => {
  return (
    <div className="body-layout">
      <Header />
      <main className="body-content">
        <h1>Welcome to the Body Component</h1>
        <p>This is where the main content will be displayed.</p>
        <Outlet />
      </main>
    </div>
  );
};

export default Body;
