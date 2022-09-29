import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import App from './App';
import './index.css';
import Issues from './Issues';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/repo/:repoId/issue/:issuesId',
    element: <Issues />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

