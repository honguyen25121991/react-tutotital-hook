import "./Nav.scss";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
const Nav = () => {
  return (
    <div className="topnav">
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink to="/product">Product</NavLink>
      <NavLink to="/otp">OTP App</NavLink>

      <NavLink to="/weather">Weather App</NavLink>
      <NavLink to="/shoes">ShoesApp</NavLink>

      <NavLink to="/about">About</NavLink>
    </div>
  );
};
export default Nav;
