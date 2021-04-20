import React from "react";
import "../components/styles/BadgeDetails.css";
import confLogo from "../images/platziconf-logo.svg";
import PageLoading from "../components/PageLoading.js";
import PageError from "../components/PageError.js";
import api from "../api.js";
import Badge from "../components/Badge.js";
import { Link } from "react-router-dom";

class BadgeDetails extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      error: null,
      data: undefined,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.read(this.props.match.params.badgeId);

      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }

    const infoBadge = this.state.data;

    return (
      <div>
        <div className="BadgeDetails__hero">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <img src={confLogo} alt="Logo de la conferencia" />
              </div>
              <div className="col-6 BadgeDetails__hero-attendant-name">
                <h1>
                  {infoBadge.firstName} {infoBadge.lastName}
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName={infoBadge.firstName}
                lastName={infoBadge.lastName}
                email={infoBadge.email}
                twitter={infoBadge.twitter}
                jobTitle={infoBadge.jobTitle}
              />
            </div>
            <div className="col">
              <h2>Actions</h2>
              <div>
                <div>
                  <Link
                    className="btn btn-primary mb-4"
                    to={`/badges/${infoBadge.id}/edit`}
                  >
                    Edit
                  </Link>
                </div>

                <div>
                  <button className="btn btn-danger">Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeDetails;
