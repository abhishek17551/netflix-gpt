import React, { useRef, useState } from 'react'
import { checkValidation } from '../utils/validate';

const Login = () => {
    const [isSignInForm,setIsSignInForm] = useState(true);
    const [errorMessage,setErrorMessage] = useState(null)

    const username = useRef(null)
    const email = useRef(null)
    const password = useRef(null)

    const handleToggle = () => {
        setIsSignInForm(!isSignInForm)
    }

    const validateForm = () => {
        const message = checkValidation(username.current.value,email.current.value,password.current.value)
        setErrorMessage(message)

    }
  return (
    
        <form onSubmit={(e) => e.preventDefault()}className='absolute bg-black flex flex-col my-52 mx-auto right-0 left-0 w-3/12 text-white p-4 bg-opacity-80'>
            <h1 className='font-bold mb-1 text-2xl'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            {
                !isSignInForm && <input ref={username} type='text' placeholder='Enter Full Name' className='p-3 m-3 bg-slate-600 cursor-text'/>
            }
            <input ref={email} type='text' placeholder='Enter Email Address' className='p-3 m-3 bg-slate-600 cursor-text'/>
            <input ref={password} type='password' placeholder='Enter Password' className='p-3 m-3 bg-slate-600' />
            <p className='text-red-500 font-bold'>{errorMessage}</p>
            <button className='bg-red-600 p-2 w-1/2 mx-auto my-2 hover:font-bold hover:bg-red-800 ' onClick={validateForm}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
            <h3 className='my-2' onClick={handleToggle}>{isSignInForm ? "New to Netflix? Sign Up Now!" : "Already Registered? Sign In!"} </h3>
        </form>
    
  )
}

export default Login