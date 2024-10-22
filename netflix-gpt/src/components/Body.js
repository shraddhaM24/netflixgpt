import React from 'react'
import Login from './Login'
import Browser from './Browser'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import TvShows from './TvShows'

const Body = () => {

    const appRoute = createBrowserRouter([
        {
            path: "/",
            element: <Login/>,
        },
        {
            path: "/browser",
            element: <Browser />,
        },
        {
            path: "/tvshows",
            element: <TvShows />,
        }
    ]);

   
  return (
    <div>
        <RouterProvider router={appRoute} />
    </div>
  )
}

export default Body
