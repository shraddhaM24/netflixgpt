import React, { useState,useEffect } from 'react';
import {signOut } from "firebase/auth";
import { auth } from '../utilis/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import {addUser, removeUser} from "../utilis/userSlice";
import {useDispatch} from "react-redux";

const Header = () => {

  const dispatch = useDispatch();

  const [isMenuOpen,setIsMenuOpen] = useState(false);
  const navigate = useNavigate(); 
  const user = useSelector((store) => store.user
);

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

  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between'>
        <div>
            <img className='w-44'
            src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt="netflix-logo"
            />
        </div>
        {user && (
          <div className='m-2 relative cursor-pointer'>
            <div onClick={handleIconClick}>
              <img className='w-7'
              src="data:image/png;base64,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"
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
