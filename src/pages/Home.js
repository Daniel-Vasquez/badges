import React from "react";
import { Link } from "react-router-dom";
import "../components/styles/Home.css";

function Home() {
  return (
    <React.Fragment>
      <div class="Home">
        <h1>Badges Arcade.</h1>
        <Link to="/badges" className="btn btn-primary">
          Badge
        </Link>
      </div>
    </React.Fragment>
  );
}

export default Home;
