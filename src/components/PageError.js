import React from "react";
import "./styles/PageError.css";

function PageError(props) {
  return <div className="PageError">{JSON.stringify(props.error)}</div>;
}

export default PageError;
