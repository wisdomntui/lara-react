import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './Pages/Home.jsx';
import NewTask from './Pages/NewTask.jsx';
import App from './App.jsx';
import {ToastContainer} from 'react-toastify';

const router = createBrowserRouter([
  {path: '/home', element: <Home />},
  {path: '/create', element: <NewTask />},
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer position="top-right" auto-close={3000} />
  </StrictMode>,
);
