import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home.jsx'
import About from './component/About/About.jsx';
import Contact_us from './component/Contact_us/Contact_us.jsx';
import User from './component/User/User.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: "",
        element:<Home/>
      },
      {
        path:"About",
        element:<About/>
      },
      {
        path:"Contact",
        element:<Contact_us/>
      },
      {
        path:"user/:userId",
        element:<User/>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App/> */}
   <RouterProvider router={router}/>
  </StrictMode>,
)
