import React from "react";
import api from "../api.js";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm.js";
import PageLoading from "../components/PageLoading.js";
import "../components/styles/BadgeEdit.css";

class BadgeEdit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
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

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async (e) => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.read(this.props.match.params.badgeId);

      this.setState({ loading: false, form: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

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
      await api.badges.update(this.props.match.params.badgeId, this.state.form);
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
      <div className="container BadgeEdit__hero">
        <div className="row">
          <div className="col-6">
            <Badge
              firstName={this.state.form.firstName || "Nombre"}
              lastName={this.state.form.lastName || "Apellido"}
              jobTitle={this.state.form.jobTitle || "Profesión"}
              twitter={this.state.form.twitter || "Twitter"}
              email={this.state.form.email || "Correo"}
              avatarUrl="https://lh3.googleusercontent.com/ogw/ADGmqu9LvsmOYAeoLi256I_pt1wRV4O5103nKFEMONYJRQ=s32-c-mo"
            />
          </div>

          <div className="col-6">
            <h1>Editar</h1>

            <BadgeForm
              onChange={this.handleChange}
              formValues={this.state.form}
              onSubmit={this.handleSubmit}
              error={this.state.error}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeEdit;
