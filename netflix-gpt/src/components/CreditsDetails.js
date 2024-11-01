import React from 'react';
import useCredits from '../hooks/useCredits';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const CreditsDetails = ({movieId}) => {
  useCredits(movieId);

  const movies = useSelector((store) => store.movies?.creditsDetails);
  const cast = movies?.cast;
  const crew = movies?.crew;

  return (
    <div>
      <p>Starring</p>
      {cast && cast.length > 0 ? (
        cast.map((casting) => casting.original_name).join(", ")
      ) : (
        <span>No cast information available</span>
      )}

      <p>Director:</p>
      {crew && crew.length > 0 ? (
        crew
          .filter((member) => member.known_for_department === "Directing")
          .map((director) => director.original_name)
          .join(", ")
      ) : (
        <span>No director information available</span>
      )}
    </div>
  );
};

export default CreditsDetails;
