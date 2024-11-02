import React, { useState } from 'react';
import useCredits from '../hooks/useCredits';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const CreditsDetails = ({movieId}) => {
  useCredits(movieId);

  const [isCastPopup,setIsCastPopup] = useState(false);
  const [isDirectorPopupVisible, setIsDirectorPopupVisible] = useState(false);

  const movies = useSelector((store) => store.movies?.creditsDetails);
  const cast = movies?.cast;
  const crew = movies?.crew;

  console.log(cast);

  const castPrivew = cast.slice(0,4);
  const directorPrivew = crew.filter(member => member.known_for_department === "Directing").slice(0,2);
  const fullDirectorList = crew.filter((member) => member.known_for_department === 'Directing');

  return (
    <div className='text-white'>
      <div className='flex'>
        <p className='font-bold'>Starring : </p>
        {
          castPrivew.length > 0 ? (
            <>
            {castPrivew.map(casting => casting.original_name).join(", ")}
            {cast.length > 4 && (
              <span style={{ cursor: 'pointer', color: 'blue' }} onClick={() => setIsCastPopup(true)}>
                ...more
              </span>
            )}
            </>
          ):
          (
            <span>No cast available</span>
          )}
      </div>
      <div className='flex'>
        <p className='font-bold'>Director : </p>
        {
          directorPrivew.length > 0 ? (
            <>
            {directorPrivew.map(casting => casting.original_name).join(" , ")}
            {fullDirectorList.length > 2 && (
              <span style={{ cursor: 'pointer', color: 'blue' }} onClick={() => setIsDirectorPopupVisible(true)}>
              ...more
                </span>
            )}
            </>
          ): (
            <span>No director information available</span>
          )
        }
      </div>
      {/* cast popup */}
      {isCastPopup && (
        <div className="popup-overlay" onClick={() => setIsCastPopup(false)}>
        <div className="popup-content" onClick={(e) => e.stopPropagation()}>
          <h3 className='font-bold text-xl py-2'>Full Cast</h3>
         <div className='overflow-y-auto'>
              {cast
                .filter(casting => casting.known_for_department === 'Acting')
                .map((casting) => (
                  <div className='py-1' key={casting.id}>{casting.original_name}</div>
                ))}
            </div>
          <h3 className='font-bold text-xl'> Production</h3>
          <div>
            {cast.
            filter(casting => casting.known_for_department === "Production").
            map((casting) => (
              <div key={casting.id}>{casting.original_name}</div>
            ))}
          </div>
          <button onClick={() => setIsCastPopup(false)}>Close</button>
        </div>
      </div>
      )}
        {/* Director Popup */}
        {isDirectorPopupVisible && (
        <div className="popup-overlay" onClick={() => setIsDirectorPopupVisible(false)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <h3>Full Director List</h3>
            <p>{fullDirectorList.map((director) => director.original_name).join(', ')}</p>
            <button onClick={() => setIsDirectorPopupVisible(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreditsDetails;
