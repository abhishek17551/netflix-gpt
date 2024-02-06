import React from 'react'
import { useSelector } from 'react-redux'
import { lang } from '../utils/languageConstants'

const GptSearchBar = () => {

    const language = useSelector((store) => store.language.lang)
  return (
    <div className='pt-[8%] flex justify-center '>
        <form className=' bg-black  w-1/2 '>
            <input type='text' className='p-4 m-4 w-3/4 rounded-lg' placeholder={lang[language].gptSearchPlaceholder}/>
            <button className='bg-red-600 text-white p-2 w-24 mx-auto my-2 hover:font-bold hover:bg-red-800 rounded-md'>{lang[language].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar