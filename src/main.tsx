import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Layout from '@/layout';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import BookPage from 'pages/client/book';
import AboutPage from 'pages/client/about';
import LoginPage from 'pages/client/auth/login';
import RegisterPage from 'pages/client/auth/register';
import 'styles/global.scss'
import HomePage from 'pages/client/home';
import { App, ConfigProvider } from 'antd';
import { AppProvider } from 'components/context/app.context';
import ProtectedRoute from '@/components/auth';
import HistoryPage from 'pages/client/history';

import enUS from 'antd/locale/en_US';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "/book/:id",
        element: <BookPage />,
      },

      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/history",
        element: (
          <ProtectedRoute>
            <HistoryPage />
          </ProtectedRoute>
        ),
      },

    ]
  },

  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },

]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App>
      <AppProvider>
        <ConfigProvider locale={enUS}>
          <RouterProvider router={router} />
        </ConfigProvider>
      </AppProvider>
    </App>
  </StrictMode>,
)
