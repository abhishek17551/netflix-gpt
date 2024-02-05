import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Landing from './Landing'
import Home from './Home';

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path : "/",
            element : <Landing/>
        },
        {
          path : "/home",
          element : <Home/>
        }
    ])




  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body