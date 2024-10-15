import React, { useEffect } from 'react'
import Login from './Login'
import Browser from './Browser'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utilis/firebase';
import {addUser, removeUser} from "../utilis/userSlice";
import {useDispatch} from "react-redux";

const Body = () => {

  const dispatch = useDispatch();

    const appRoute = createBrowserRouter([
        {
            path: "/",
            element: <Login/>,
        },
        {
            path: "/browser",
            element: <Browser />,
        }
    ]);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid,email,displayName,photoURL} = user;
              dispatch(addUser({
                uid:uid, 
                email:email, 
                displayName: displayName,
                photoURL: photoURL,
              }));
            } else {
              dispatch(removeUser());
            }
          });
    },[]);

  return (
    <div>
        <RouterProvider router={appRoute} />
    </div>
  )
}

export default Body
