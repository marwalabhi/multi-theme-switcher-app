import { useState } from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router';
import { Provider } from 'react-redux';
import Body from './components/Body/Body';
import MainContainer from './components/Body/MainContainer/MainContainer';

const appRouter = createBrowserRouter([
  {
    path: '/',
    Component: Body,
    children: [{ index: true, Component: MainContainer }, {}],
  },
]);

function App() {
  return (
    // <Provider store={store}>
    <RouterProvider router={appRouter} />

    // </Provider>
  );
}

export default App;
