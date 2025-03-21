import React from 'react';
import ReactDOM from "react-dom/client"
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import LoginPage from './Pages/login.jsx';
import RegisterPage from './Pages/register.jsx';
import ErrorPage from './Pages/404.jsx';
import ProductsPage from './Pages/products.jsx';
import ProfilePage from './Pages/profile.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div className="flex justify-center items-center min-h-screen flex-col">Hello World</div>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/login",
    element: <LoginPage/>
  },
  {
    path: "/register",
    element: <RegisterPage/>
  },
  {
    path: "/products",
    element: <ProductsPage/>
  },
  {
    path: "/profile",
    element: <ProfilePage/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
