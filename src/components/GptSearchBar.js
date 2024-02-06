import React from 'react'

const GptSearchBar = () => {
  return (
    <div className='pt-[8%] flex justify-center '>
        <form className=' bg-black  w-1/2 '>
            <input type='text' className='p-4 m-4 w-2/3 rounded-lg' placeholder='Hit me up with what you want watch today...'/>
            <button className='bg-red-600 text-white p-2 w-20 mx-auto my-2 hover:font-bold hover:bg-red-800 rounded-md'>Search</button>
        </form>
    </div>
  )
}

export default GptSearchBar