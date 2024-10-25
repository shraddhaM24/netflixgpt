import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen pt-[20%] px-10 aspect-video absolute text-white bg-gradient-to-r from-black'>
        <div className='bg-opacity-95'>
            <h2 className='text-4xl font-extrabold'>{title}</h2>
            <p className='py-6 text-lg w-1/4 line-clamp-3'>{overview}</p>
        </div>
        <div>
            <button className='text-black mx-2 p-4 px-10 text-lg rounded-lg bg-white hover:bg-opacity-80'>Play</button>
            <button className='bg-gray-500 text-white p-4 px-10 text-lg rounded-lg'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle
