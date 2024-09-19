import { useState , useEffect} from "react";
import {Link} from "react-router-dom";

const Header = () =>{

  const[btnName,setBtnName] = useState("Login");
  // console.log("Header render");

  //if no dependency array => useEffect is called on every render
  //if dependency array is empty i.e [] => useEffect is called on inital render(just once)
  //if dependency array as btnName [btnName] => useEffect is called on every btnName render
  // useEffect(() => {
  //   console.log("useEffect called")
  // },[btnName]);

  return(
    <div className='header'>
      <div className="section-header">
        <div className='logo-container'>
          <img className='logo' src='data:image/jpeg;base64,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' />
        </div>
        <div className='nav-items'>
          <ul>
            <li className="nav-name"><Link to="/">Home</Link></li>
            <li className="nav-name"><Link to="/about">About us</Link></li>
            <li className="nav-name"><Link to="/contact">Contact us</Link></li>
            <li className="nav-name">Cart</li>
            <button className="btn-login" onClick={() => {
                btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
            }}>{btnName}</button>
          </ul>
        </div>
      </div>
    </div>
  )
}


export default Header;