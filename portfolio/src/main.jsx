import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/home'
import About from './components/About/About'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, {gitInfoLoader} from './components/Github/Github.jsx'

const router=createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:"",
        element:<Home/> 
      },{
        path:"about",
        element:<About />
      },{
        path:"contact",
        element:<Contact />
      },{
        path:"user/:userid",
        element:<User/>
      },
      {
        loader:gitInfoLoader,
        path:"github",
        element:<Github/>
      }
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
