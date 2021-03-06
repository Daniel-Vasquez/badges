import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Badges from "../pages/Badges.js";
import BadgeNew from "../pages/BadgeNew.js";
import Layout from "./Layout.js";
import NotFound from "../pages/NotFound.js";
import BadgeEdit from "../pages/BadgeEdit.js";
import BadgeDetails from "../pages/BadgeDetailsContainer.js";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Badges} />
          <Route exact path="/badges/new" component={BadgeNew} />
          <Route exact path="/badges/:badgeId" component={BadgeDetails} />
          <Route exact path="/badges/:badgeId/edit" component={BadgeEdit} />
          <Route exact path="/error" component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
