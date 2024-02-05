import React from 'react'
import Header from './Header'
import Login from './Login'
import { LANDING_PAGE_BG } from '../utils/constants'

const Landing = () => {
  return (
    <div>
        <Header/>
        <div className='absolute'>
        <img 
            src={LANDING_PAGE_BG}
            alt='landing-page-background'
            className='h-full'    
        />
        </div>

        <Login/>
    </div>
  )
}

export default Landing