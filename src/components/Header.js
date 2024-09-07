import {LOGO_URL} from "../utils/constant";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  useEffect(()=> { console.log("useEffect called")});
  const onlineStatus = useOnlineStatus();
    return (
      <div className="headercontainer">
        <div className="logo-container">
          <img src={LOGO_URL} className="logo"></img>
        </div>
        <div className="nav-items">
          <ul>
            <li className="linkable-nav-items">Online Status {onlineStatus ? "✅" : "⛔"}</li>
            <li><Link to="/Grocery" className="linkable-nav-items">Grocery</Link></li>
            <li><Link to="/" className="linkable-nav-items">Home</Link></li>
            <li><Link to="/about-us" className="linkable-nav-items">About Us</Link></li>
            <li><Link to="/contact-us" className="linkable-nav-items">Contact Us</Link></li>
            <li><a href="" className="linkable-nav-items">Cart</a></li>
          </ul>
        </div>
      </div>
    );
  };

export default Header;