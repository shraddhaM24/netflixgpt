import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

  const [signIn,setSignIn] = useState(true);

  const toggleSignInForm = () => {
    setSignIn(!signIn);
  };

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
        <form>
           {!signIn && 
              <>
                <input type="text" placeholder='Full Name' className='p-4 my-4 w-full
                border-2 rounded-md bg-transparent border-gray-800' />
                <input type="text" placeholder='Mobile Number' className='p-4 my-4 w-full
                  border-2 rounded-md bg-transparent border-gray-800' />
              </>
            }
             
            <input type="text" placeholder='Email or Mobile Number' className='p-4 my-4 w-full
             border-2 rounded-md bg-transparent border-gray-800' />
            <input type="password" placeholder='Password' className='p-4 my-4 w-full
             border-2 rounded-md bg-transparent border-gray-800'/>
            <button className='p-2 my-4 rounded-md bg-red-700 w-full'>{signIn ? "Sign In" : "Sign out"}</button>
        </form>
        <div>
          <p>New to Netflix? <span className="cursor-pointer font-bold" onClick={toggleSignInForm}>Sign Up Now</span></p>
        </div>
      </div>
    </div>
  )
}

export default Login
