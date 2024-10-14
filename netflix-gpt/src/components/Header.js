import React from 'react';
import {signOut } from "firebase/auth";
import { auth } from '../utilis/firebase';
import { useNavigate } from 'react-router-dom';

const Header = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    signOut(auth).then(() => {
      navigate("/");
      
    }).catch((error) => {
      // An error happened.
    });
  };

  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen'>
        <div>
            <img className='w-44'
            src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt="netflix-logo"
            />
        </div>
        <div>
          <button onClick={handleClick}>Sign out</button>
        </div>
    </div>
  )
}

export default Header
