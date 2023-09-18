import React, { useState } from "react";
import logoImg from "../../image/orange-1618917_1280.png";
import "./header.css";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="header-container">
      <div className="header">
        <div className="logo">
          <img src={logoImg} alt="logo" />
        </div>
        <ul
          style={{
            clipPath: toggle && "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          }}
          className="nav"
        >
          <Link to="/" className="link" onClick={() => setToggle(false)}>
            Home
          </Link>
          <Link to="/about" className="link" onClick={() => setToggle(false)}>
            About
          </Link>
          <Link to="/register" className="link" onClick={() => setToggle(false)}>
            Register
          </Link>
          <Link to="login" className="link" onClick={() => setToggle(false)}>
            Login
          </Link>
        </ul>
        <div className="bars">
          <FaBars className="bars" onClick={() => setToggle((prv) => !prv)} />
        </div>
      </div>

    </div>
  );
};

export default Header;
