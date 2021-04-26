import React from "react";
import { Link } from "react-router-dom";
import "../components/styles/Home.css";

function useIncreaseCount(max) {
  const [count, setCount] = React.useState(0);

  if (count > max) {
    setCount(0);
  }

  return [count, setCount];
}

function Home() {
  const [count, setCount] = useIncreaseCount(7);

  // const count = 4;

  return (
    <React.Fragment>
      <div className="Home">
        <h1>Badges Arcade.</h1>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
          className="btn btn-primary mt-4 mb-4"
        >
          Increase Count: {count}
        </button>
        <Link to="/badges" className="btn btn-primary">
          Badge
        </Link>
      </div>
    </React.Fragment>
  );
}

export default Home;
