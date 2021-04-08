import React from "react";
import header from "../images/platziconf-logo.svg";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm.js";

import "../components/styles/BadgeNew.css";
import api from "../api.js";
import PageLoading from "../components/PageLoading.js";

class BadgeNew extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      error: null,
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

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ loading: true, error: null });

    try {
      await api.badges.create(this.state.form);
      this.setState({ loading: false });

      this.props.history.push("/badges");
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }

    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName || "First Name"}
                lastName={this.state.form.lastName || "Last Name"}
                jobTitle={this.state.form.jobTitle || "JobTitle"}
                twitter={this.state.form.twitter || "Twitter"}
                email={this.state.form.email || "Email"}
                avatarUrl="https://lh3.googleusercontent.com/ogw/ADGmqu9LvsmOYAeoLi256I_pt1wRV4O5103nKFEMONYJRQ=s32-c-mo"
              />
            </div>

            <div className="col-6">
              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
                onSubmit={this.handleSubmit}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;
