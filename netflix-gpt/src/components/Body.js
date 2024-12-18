import React from 'react'
import Login from './Login'
import Browser from './Browser'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import TvShows from './TvShows'
import MovieDetails from './MovieDetails'
import MainContainer from './MainContainer'
import TvShowDetails from './TvShowDetails'

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
        },
        {
            path:"/movie",
            element:<Browser/>
        },
        {
            path: "/movie/:id",
            element: <MovieDetails/>
        },
        {
            path: "/tvshow/:id",
            element: <TvShowDetails/>
        }
    ]);

   
  return (
    <div>
        <RouterProvider router={appRoute} />
    </div>
  )
}

export default Body
