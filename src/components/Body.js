import React from 'react'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Landing from './Landing'

const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path : "/",
            element : <Landing/>
        }
    ])
  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body