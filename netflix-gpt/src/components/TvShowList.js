import React from 'react';
import TvShowCard from './TvShowCard';

const TvShowList = ({ title, movies }) => {
  return (
    <div className='px-6'>
        <h1 className='text-3xl font-bold py-4 text-white'>{title}</h1>
        <div className='flex overflow-x-scroll'>
            <div className='flex'>
                {movies && movies.map((movie) => (
                    <TvShowCard posterPath={movie.poster_path} id={movie.id} />
                ))}
            </div>
        </div>
    </div>
  );
};

export default TvShowList;
