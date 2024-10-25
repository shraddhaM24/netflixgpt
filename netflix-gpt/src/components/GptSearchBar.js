import React, { useRef } from 'react'
import lang from '../utilis/languageConstant'
import { useSelector } from 'react-redux'
import openaiGpt from '../utilis/openaiGpt';

const GptSearchBar = () => {

  const languageKey = useSelector(store => store.config.lang);
  const serachText = useRef(null);

  const handleGptSearchKey = async () => {

    const gptSerach = 
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      serachText.current.value +
      ". only give me names of 5 movies, comma separated like the example result given ahead. Example result: gardar,golmaal,koi mil gya,don,sholay";
  

    const gptResult =  await openaiGpt.chat.completions.create({
      messages: [{ role: 'user', content: gptSerach }],
      model: 'gpt-3.5-turbo',
    });

    console.log(gptResult.choices?.[0]?.message?.content);

  };

  return (
    <div className='pt-[10%] flex justify-center'>
      <form className='w-1/2 bg-black grid grid-cols-12'
      onSubmit={(e) => e.preventDefault()}
      >
        <input ref={serachText} type="text" className='p-4 m-4 col-span-9' placeholder={lang[languageKey].gptSearchPlaceholder} />
        <button className='col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg'
          onClick={handleGptSearchKey}
        >{lang[languageKey].serach}</button>
      </form>
    </div>
  )
}

export default GptSearchBar
