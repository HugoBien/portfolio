import { createRoot } from 'react-dom/client'
import {createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom';
import App from './App.jsx'
import Header from './Header.jsx'
import Skills from './skills/Skills.jsx'
import './index.css'
import Experiences from "./experiences/Experiences.jsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <div><Header /> <Outlet /></div>,
        children: [
            {
                path: "/",
                element: <App />,
            },
            {
                path: "/skills",
                element: <Skills />,
            },
            {
                path: "/experiences",
                element: <Experiences />,
            }
        ]
    },
    ,
]);



createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />

)
