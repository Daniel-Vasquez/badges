import React from "react";
import "../components/styles/BadgesList.css";
import { Link } from "react-router-dom";
import Gravatar from "./Gravatar.js";
class BadgesList extends React.Component {
  render() {
    if (this.props.badges.length === 0) {
      return (
        <div>
          <h3>No hay ningún badges.</h3>
          <Link className="btn btn-primary" to="/badges/new">
            Crea el tuyo.
          </Link>
        </div>
      );
    }

    return (
      <ul className="list-unstyled BadgesList">
        {this.props.badges.map((badge) => {
          return (
            <li key={badge.id} className="BadgesListItem">
              <Gravatar
                email={badge.email}
                alt=""
                className="BadgesListItem__avatar"
              />
              <div>
                <div>
                  <strong>
                    {badge.firstName} {badge.lastName}
                  </strong>
                </div>
                <div className="Twitter__name">
                  <span className="Twitter__logo"></span>@{badge.twitter}
                </div>
                <div>{badge.jobTitle}</div>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;
