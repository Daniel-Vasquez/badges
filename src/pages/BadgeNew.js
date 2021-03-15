import React from "react";
import Navbar from "../components/Navbar.js";
import header from "../images/badge-header.svg";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm.js";

import "../components/styles/BadgeNew.css";

class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName="Daniel"
                lastName="Vasquez"
                jobTitle="Desarrollador dev"
                twitter="Daniel"
                avatarUrl="https://lh3.googleusercontent.com/ogw/ADGmqu9LvsmOYAeoLi256I_pt1wRV4O5103nKFEMONYJRQ=s32-c-mo"
              />
            </div>

            <div className="col-6">
              <BadgeForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
