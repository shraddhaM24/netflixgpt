import React,{lazy,Suspense, useEffect, useState} from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from './utils/UserContext';
// import Grocery from "./components/Grocery";
import { Provider } from "react-redux";
import appStore from './utils/appStore';
import Cart from './components/Cart';

const Grocery = lazy(() => import("./components/Grocery"));

const MainApp = () => {
  const [userName,setUserName] = useState();

  // authenication
  useEffect(() => {
    const data = {
      name : "Shraddha Mistry",
    }
    setUserName(data.name);
  },[]);

  return(
    <Provider store={appStore}>
      <UserContext.Provider value={{loggedInUser : userName, setUserName}}>
        <div className='app'>
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  )
}


//we can nest usercontext
// return(
//   <UserContext.Provider value={{loggedInUser : userName}}>
//     <div className='app'>
//     <UserContext.Provider value={{loggedInUser : "sony mistry"}}>
//       <Header />
//       </UserContext.Provider>
//       <Outlet />
//     </div>
//   </UserContext.Provider>
// )
// }

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainApp />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading.......</h1>}><Grocery/></Suspense>,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />
      }
    ],
    errorElement: <Error />,

  }
]);

const App = () => {
  return (
    <RouterProvider  router={appRouter} />
  );
};


export default App;