import React, { useState,useEffect } from 'react';
import {signOut } from "firebase/auth";
import { auth } from '../utilis/firebase';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import {addUser, removeUser} from "../utilis/userSlice";
import {useDispatch} from "react-redux";
import { LOGO_URL, SUPPORTED_LNGUAGES, USER_AVTAR } from '../utilis/constants';
import BrowseTvShows from './BrowseTvShows';
import {toggleGptSearchView} from "../utilis/gptSlice";
import { changeLanguage } from '../utilis/configSlice';

const Header = () => {

  const dispatch = useDispatch();

  const [isMenuOpen,setIsMenuOpen] = useState(false);
  const navigate = useNavigate(); 
  const user = useSelector((store) => store.user);
  const showGptValue = useSelector((store) => store.gpt.showGptSearch);

  const handleClick = () => {
    signOut(auth).then(() => {
      navigate("/");
      
    }).catch((error) => {
      // An error happened.
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid,email,displayName,photoURL} = user;
          dispatch(addUser({
            uid:uid, 
            email:email, 
            displayName: displayName,
            photoURL: photoURL,
          }));
          navigate("/browser");
        } else {
          dispatch(removeUser());
          navigate("/");
        }
      });
      return () => unsubscribe();
  },[]);

  const handleIconClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  }

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  }

  const handleTvShows = () => {
    console.log("aaaa00");
    <BrowseTvShows/>
  };

  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between'>
        <div>
            <img className='w-44'
            src={LOGO_URL}
            alt="netflix-logo"
            />
        </div>
        {user && (
          <div className='flex'>
            <p className='text-white px-2'><Link to="/">Home</Link></p>
            <p className='text-white px-2 cursor-pointer' onClick={handleTvShows}>TV Shows</p>
            <p className='text-white px-2'>Movies</p>
            <div>
              <button className='text-white rounded-lg bg-purple-800 py-2 px-2'
              onClick={handleGptSearchClick}>GPT</button>
            </div>
            {
              showGptValue && (
                <select className='m-2 p-2 mt-0 h-10 bg-gray-700 text-white' onChange={handleLanguageChange}>
                {
                  SUPPORTED_LNGUAGES.map(lang =><option key={lang.identifier} value={lang.identifier}>{lang.name}</option> )
                }
              </select>
              )
            }
          </div>
        )}
        {user && (
          <div className='m-2 relative cursor-pointer'>
            <div onClick={handleIconClick}>
              <img className='w-7'
              src={USER_AVTAR}
              />
            </div>
            {isMenuOpen && (
               <div className='absolute right-0 mt-2 py-2 w-48 bg-white shadow-lg'>
               <p className='block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer'>
                 Account
               </p>
               <button
                 onClick={handleClick}
                 className='block px-4 py-2 w-full text-left text-gray-800 hover:bg-gray-100'
               >
                 Sign out
               </button>
             </div>
            )}
          </div>
        )}
    </div>
  )
}

export default Header
