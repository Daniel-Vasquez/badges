import React from "react";
import ReactDOM from "react-dom";
//import Badge from "./components/Badge";
import "bootstrap/dist/css/bootstrap.css";
import "./global.css";

import BadgeNew from "./pages/BadgeNew.js";
import Badges from "./pages/Badges.js";
import App from "./components/App.js";

const container = document.getElementById("root");

ReactDOM.render(<App />, container);
