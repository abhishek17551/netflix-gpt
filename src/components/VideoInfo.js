import React from 'react'

const VideoInfo = ({title, overview, date}) => {
  return (
    <div className='p-3 box-border w-80 rounded-l-xl absolute top-[25%] ml-8 text-white bg-gradient-to-r from-black' >
        <h1 className='font-bold italic text-3xl m-1'>{title}</h1>
        <p className='m-1'>{overview}</p>
        <p className='m-1'><i>Released on :</i> {date}</p>
        <div>
            <button className='w-24 h-12 p-1 m-2 rounded-md bg-gray-300 hover:bg-gray-200 text-black '>Play ▶️</button>
            <button className='w-32 h-12 p-1 m-2 rounded-md bg-gray-300 hover:bg-gray-200 text-black '>Movie Info ℹ️</button>
        </div>
    </div>
  )
}

export default VideoInfo