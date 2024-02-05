import React from 'react'

const VideoInfo = ({title, overview, date}) => {
  return (
    <div className='pt-16 box-border w-80'>
        <h1 className='font-bold italic text-3xl m-1'>{title}</h1>
        <p className='m-1'>{overview}</p>
        <p className='m-1'><i>Released on :</i> {date}</p>
        <div>
            <button className='w-18 h-12 p-1 m-2 rounded-md bg-white-500'>Play ▶️</button>
            <button className='w-32 h-12 p-1 m-2 rounded-md bg-gray-300'>Movie Info ℹ️</button>
        </div>
    </div>
  )
}

export default VideoInfo