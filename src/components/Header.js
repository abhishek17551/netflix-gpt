import React, { useEffect } from 'react'
import {  onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/slices/userSlice';
import { BRAND_LOGO } from '../utils/constants';
import { toggleGptSearchView } from '../utils/slices/gptSlice';
import { SUPPORTED_LANGUAGES } from '../utils/languageConstants';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user)
  

  const handleSignOut = () => {
    signOut(auth).then(() => {
        navigate("/")
    }).catch((error) => {
        navigate("/error")
    });
  }

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView())
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User Signed in
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
        navigate('/home')
      } else {
        // User Signed out
        dispatch(removeUser())
        navigate('/')
      }
    });

    //Unsubscribe when component unmounts
    return () => unsubscribe()
  },[])
  return ( 
    <div className='absolute px-7 py-3 w-full flex justify-between bg-gradient-to-b from-black z-10'>
        <img className='w-40 ' src={BRAND_LOGO} alt='brand-logo'/>
        {
          user && (
            //display only if user is signed in
            <div className='flex p-2 m-1'>
              <select className='mr-3 mt-2 h-8 rounded-sm bg-black text-white'>
                {
                  SUPPORTED_LANGUAGES.map(({identifier,name}) => (
                    <option key={identifier} value={identifier}>{name}</option>
                  ))
                }
              </select>
              <button onClick={handleGptSearchClick} className='bg-green-700 font-bold text-white p-1 rounded-md h-10 my-auto hover:bg-green-500'>GPT Search</button>
              <h3 className='font-bold text-white m-2'>Hello, {user?.displayName} 👋 </h3>
              <img className='w-10 h-10 rounded-md mr-3 cursor-pointer' src={user?.photoURL} alt='user-icon'/>
              <button onClick={handleSignOut} className='bg-red-600 font-bold text-white p-1 rounded-md h-10 my-auto hover:bg-red-700'>Sign Out</button>
            </div>
          )
        }
    </div>
  )
}

export default Header