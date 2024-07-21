import { useState } from 'react'
// import { BrowserRouter, Routes, Route} from "react-router-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './App.css'
import { Signup } from './components/Signup';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Todos } from './components/Todos';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home /> ,
    },
    {
      path: "/signup",
      element: <Signup />
    },{
      path:"/login",
      element: <Login />
    },{
      path:'/mytodos',
      element: <Todos />
    }

  ]);

  return (
    <>
     <RouterProvider router={router} />
      {/* <BrowserRouter>
      <Routes>
        <Route path='/signup' Component={<Signup />} />
      </Routes>
      </BrowserRouter> */}
    </>
  )
}

export default App
