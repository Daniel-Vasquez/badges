import React from "react";
import api from "../api.js";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm.js";
import PageLoading from "../components/PageLoading.js";
import "../components/styles/BadgeNew.css";

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
    this.setState({
      form: {
        ...this.state.form,
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

      this.props.history.push("/");
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
        <div className="container BadgeNew__hero">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName}
                lastName={this.state.form.lastName}
                jobTitle={this.state.form.jobTitle || "Profesión"}
                twitter={this.state.form.twitter || "Twitter"}
                email={this.state.form.email || "Correo"}
                avatarUrl="https://lh3.googleusercontent.com/ogw/ADGmqu9LvsmOYAeoLi256I_pt1wRV4O5103nKFEMONYJRQ=s32-c-mo"
              />
            </div>

            <div className="col-6">
              <h1>Nuevo Usuario</h1>
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
