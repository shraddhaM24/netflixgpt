import React,{lazy,Suspense} from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";


// function App() {
//   const [mode,setMode] = useState('light');
//   const toogleMode = () => {
//     if(mode === 'light'){
//       setMode('dark');
//       document.body.style.backgroundColor = 'grey';
//     }else{
//       setMode('light');
//       document.body.style.backgroundColor = 'white';
//     }
//   }
//   return (
//     <>
//       <Nav mode={mode} toogleMode={toogleMode} />
//       <TextForm heading="Project 1" mode={mode} />
//     </>
//   );
// }

// export default App;

const Grocery = lazy(() => import("./components/Grocery"));

const MainApp = () => {
  return(
    <div className='app'>
        <Header />
        <Outlet />
    </div>
  )
}

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