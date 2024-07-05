import {LOGO_URL} from "../utils/constant";
const Header = () => {
    return (
      <div className="headercontainer">
        <div className="logo-container">
          <img src={LOGO_URL} className="logo"></img>
        </div>
        <div className="nav-items">
          <ul>
            <li><a href="" className="linkable-nav-items">Home</a></li>
            <li><a href="" className="linkable-nav-items">About Us</a></li>
            <li><a href="" className="linkable-nav-items">Contact Us</a></li>
            <li><a href="" className="linkable-nav-items">Cart</a></li>
          </ul>
        </div>
      </div>
    );
  };

export default Header;