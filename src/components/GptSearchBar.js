import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { lang } from '../utils/languageConstants'
import openai from '../utils/openai'
import { addGptMovieResults } from '../utils/slices/gptSlice'

const GptSearchBar = () => {
  const searchText = useRef(null)
  const dispatch = useDispatch();
  const language = useSelector((store) => store.language.lang)

  const searchMovieOnTMDB = async (movieName) => {
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+ movieName +'&include_adult=false&language=en-US&page=1')
    const json = data.json()
    return json.results
  }
  

  const handleGptSearchClick = async () => {
    const gptQuery = 'Act as a movie recommendation system and suggest movies based on the query : ' + searchText.current.value + '. Suggest only the names of 5 movies where each name is separated by comma'

    const gptSearchResults = await openai.chat.completions.create({
        messages: [{ role: 'user', content: gptQuery }],
        model: 'text-embedding-ada-002',
      });

    if (!gptSearchResults.choices) {
        // TODO: Write Error Handling
      }

    const gptMovieResults = gptSearchResults.choices?.[0]?.message?.content.split(",")

    const promiseArray = gptMovieResults.map((name) => searchMovieOnTMDB(name));

    const tmdbMovieResults = await Promise.all(promiseArray)

    dispatch(addGptMovieResults({
        movieNames : gptMovieResults, movieResults : tmdbMovieResults
    }))
  }
  return (
    <div className='pt-[8%] flex justify-center '>
        <form className=' bg-black  w-1/2' onSubmit={(e) => e.preventDefault()}>
            <input type='text' ref={searchText} className='p-4 m-4 w-3/4 rounded-lg' placeholder={lang[language].gptSearchPlaceholder}/>
            <button 
                className='bg-red-600 text-white p-2 w-24 mx-auto my-2 hover:font-bold hover:bg-red-800 rounded-md'
                onClick={handleGptSearchClick}
            >
                {lang[language].search}
            </button>
        </form>
    </div>
  )
}

export default GptSearchBar