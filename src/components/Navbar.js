import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/users.png";
import "./styles/Navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid Navbar__links">
          <Link className="Navbar__brand" to="/" title="Inicio">
            <img className="Navbar__brand-logo" src={logo} alt="Logo" />
          </Link>
          <Link
            className="Navbar__links-linkerind"
            to={{
              pathname:
                "https://www.linkedin.com/in/daniel-vasquez-nepomuceno/",
            }}
            target="_blank"
            title="Linkerind"
          >
            <span className="font-weight-light">Daniel </span>
            <span className="font-weight-bold">Vasquez</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
