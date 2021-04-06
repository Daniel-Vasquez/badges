import React from "react";
import contLogo from "../images/badge-header.svg";
import "./styles/Badge.css";
import Gravatar from "./Gravatar.js";
class Badge extends React.Component {
  render() {
    const {
      firstName,
      lastName,
      jobTitle,
      twitter,
      // avatarUrl Ahora es una props,
      email,
    } = this.props;

    return (
      <div className="Badge">
        <div className="Badge_header">
          <img src={contLogo} alt="Logo de la conferencia" />
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
          {/* <a href="https://twitter.com">@Daniel</a> */}
        </div>

        <div className="Badge_footer">#platziconf</div>
      </div>
    );
  }
}

export default Badge;
