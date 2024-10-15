import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkFormValidateData } from '../utilis/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile   } from "firebase/auth";
import { auth } from '../utilis/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utilis/userSlice';

const Login = () => {

  const dispatch = useDispatch();

  const [signIn,setSignIn] = useState(true);
  const [errMessage,setErrMessage] = useState(null);

  const email = useRef(null)
  const password = useRef(null);
  const mobile = useRef(null);
  const name = useRef(null);

  const toggleSignInForm = () => {
    setSignIn(!signIn);
  };

  const handleButtonClick = () => {
    const fromValidateValue = checkFormValidateData(email.current.value,password.current.value);
    setErrMessage(fromValidateValue);
    if(errMessage) return;

    //Sign In & sign up logic
    if(!signIn){
      createUserWithEmailAndPassword(
        auth, email.current.value, password.current.value,name.current.value
      )
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;

        updateProfile(user, {
          displayName: name.current.value, 
          photoURL: "https://example.com/jane-q-user/profile.jpg"
        }).then(() => {
          const {uid,email,displayName,photoURL} = auth.currentUser;
          dispatch(addUser({
            uid:uid, 
            email:email, 
            displayName: displayName,
            photoURL: photoURL,
          }));
        }).catch((error) => {
          setErrMessage(error.message);
        });

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrMessage(errorMessage);
      });

    }else{
      signInWithEmailAndPassword(
        auth, email.current.value, password.current.value
      )
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrMessage(errorMessage);
      });

    }
  }

  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img 
        src="https://assets.nflxext.com/ffe/siteui/vlv3/4d2c5849-b306-4884-9036-6211f7ee0178/web/IN-en-20240930-TRIFECTA-perspective_1e1ca6cd-9e2d-4e9d-9e4b-ba0c2d3a0e31_small.jpg"
        alt="background-logo"
        />
      </div>
      <div className='w-3/12 absolute mx-auto my-36 right-0 left-0 text-white bg-opacity-80 bg-black p-10'>
        <h1 className='font-bold text-3xl pb-5'>{signIn ? "Sign In" : "Sign out"}</h1>
        <form onSubmit={(e) => e.preventDefault()}>
           {!signIn && 
              <>
                <input ref={name} type="text" placeholder='Full Name' className='p-4 my-4 w-full
                border-2 rounded-md bg-transparent border-gray-800' />

                <input ref={mobile} type="text" placeholder='Mobile Number' className='p-4 my-4 w-full
                  border-2 rounded-md bg-transparent border-gray-800' />
              </>
            }
             
            <input ref={email} type="text" placeholder='Email or Mobile Number' className='p-4 my-4 w-full
             border-2 rounded-md bg-transparent border-gray-800' />

            <input ref={password} type="password" placeholder='Password' className='p-4 my-4 w-full
             border-2 rounded-md bg-transparent border-gray-800'/>

            <p className='text-red-400'>{errMessage}</p>

            <button className='p-2 my-4 rounded-md bg-red-700 w-full' onClick={handleButtonClick}>
              {signIn ? "Sign In" : "Sign out"}
            </button>
        </form>
        <div>
          <p>New to Netflix? <span className="cursor-pointer font-bold" onClick={toggleSignInForm}>Sign Up Now</span></p>
        </div>
      </div>
    </div>
  )
}

export default Login
