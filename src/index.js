import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SuperstarPage from './pages/SuperstarPage';
import StanSmithPage from './pages/StanSmithPage';
import UltraboostPage from './pages/UltraboostPage';
import App from './App';
import ShopPage from './pages/ShopPage';
import { RecoilRoot } from 'recoil';
import CartPage from './pages/CartPage';
import { Toaster } from 'react-hot-toast';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <App>
        <HomePage />
      </App>
    ),
  },
  {
    path: '/superstar',
    element: (
      <App>
        <SuperstarPage />
      </App>
    ),
  },
  {
    path: '/stansmith',
    element: (
      <App>
        <StanSmithPage />
      </App>
    ),
  },
  {
    path: '/ultraboost',
    element: (
      <App>
        <UltraboostPage />
      </App>
    ),
  },
  {
    path: '/shop',
    element: (
      <App>
        <ShopPage />
      </App>
    ),
  },
  {
    path: '/cart',
    element: (
      <App>
        <CartPage />
      </App>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Toaster />
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  </React.StrictMode>,
);
