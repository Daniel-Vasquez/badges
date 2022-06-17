import React from "react";
import Gravatar from "./Gravatar.js";
import "./styles/Badge.css";

class Badge extends React.Component {
  render() {
    const { firstName, lastName, jobTitle, twitter, email } = this.props;

    return (
      <div className="Badge">
        <div className="Badge_header">
          {firstName ? (
            <p className="Badge_header-text">
              HOLA, <span>{firstName.toUpperCase()}.</span>
            </p>
          ) : null}
        </div>

        <div className="Badge_section-name">
          <Gravatar
            className="Badge_avatar"
            email={this.props.email}
            alt="Avatar"
          />
          <h1>
            {firstName} <br /> {lastName}
          </h1>
        </div>

        <div className="Badge_section-info">
          <h3>{jobTitle}</h3>
          <div>{email}</div>
          <div>@{twitter}</div>
        </div>
      </div>
    );
  }
}

export default Badge;
