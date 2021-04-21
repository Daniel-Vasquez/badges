import React from "react";
import "../components/styles/BadgeDetails.css";
import confLogo from "../images/platziconf-logo.svg";
import { Link } from "react-router-dom";
import Badge from "../components/Badge.js";

function BadgeDetails(props) {
  const infoBadge = props.badge;

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

export default BadgeDetails;
