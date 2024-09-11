import logo from './logo.svg';
import './App.css';
// import Nav from './components/Nav';
// import TextForm from './components/TextForm';
import Header from './components/Header';
import Body from './components/Body';


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

const App = () => {
  return(
    <div className='app'>
        <Header />
        <Body />
    </div>
  )
}

export default App;