import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';

import router from '@routers/baseRouter.tsx';

import Header from '@components/Header/Header.tsx';

import App from './App.tsx'

import "the-new-css-reset/css/reset.css";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
