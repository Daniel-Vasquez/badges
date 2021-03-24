import React from "react";
import Navbar from "../components/Navbar.js";
import header from "../images/badge-header.svg";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm.js";

import "../components/styles/BadgeNew.css";

class BadgeNew extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        firstName: "",
        lastName: "",
        email: "",
        jobTitle: "",
        twitter: "",
      },
    };
  }

  handleChange = (e) => {
    // const nextForm = this.state.form; Primera forma.
    // nextForm[e.target.name] = e.target.value;

    this.setState({
      form: {
        ...this.state.form, //Segunda forma.
        [e.target.name]: e.target.value,
      },
    });
  };

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
                firstName={this.state.form.firstName}
                lastName={this.state.form.lastName}
                jobTitle={this.state.form.jobTitle}
                twitter={this.state.form.twitter}
                email={this.state.form.email}
                avatarUrl="https://lh3.googleusercontent.com/ogw/ADGmqu9LvsmOYAeoLi256I_pt1wRV4O5103nKFEMONYJRQ=s32-c-mo"
              />
            </div>

            <div className="col-6">
              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
