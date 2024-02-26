import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './store/store';
import { Provider } from 'react-redux'
import './index.css';
import './styles/index.css';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import BlogList from './pages/BlogList';
import BlogForm from './pages/BlogForm';
import BlogEdit from './pages/BlogEdit';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<Login />} />
      <Route path='/home' element={<BlogList />} />
      <Route path='/register' element={<Register />} />
      <Route path='/blogform' element={<BlogForm />} />
      <Route path='/editform/:id' element={<BlogEdit />} />
    </Route>
  )
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
