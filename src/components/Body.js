import React, { useEffect } from 'react'
import {  onAuthStateChanged } from "firebase/auth";
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Landing from './Landing'
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/slices/userSlice';
import Home from './Home';

const Body = () => {
    const dispatch = useDispatch();

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

    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User Signed in
          const {uid,email,displayName,photoURL} = user;
          dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
        } else {
          // User Signed out
          dispatch(removeUser())
        }
      });
    },[])


  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body