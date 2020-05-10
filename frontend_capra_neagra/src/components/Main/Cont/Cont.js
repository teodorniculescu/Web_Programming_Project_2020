import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import Confirmare from "./Confirmare/Confirmare.js";
import Inregistrare from "./Inregistrare/Inregistrare";
import Dashboard from "./Dashboard";
import Intrare from "./Intrare/Intrare";
import TotiUtilizatorii from "./TotiUtilizatorii";

class Cont extends Component {
  state = {};
  render() {
    return (
      <Switch>
        <Route path={"/cont/totiutilizatorii"} component={TotiUtilizatorii} />
        <Route path={"/cont/confirmare"} component={Confirmare} />
        <Route path={"/cont/inregistrare"} component={Inregistrare} />
        <Route path={"/cont/intrare"}>
          {localStorage.getItem("logged_in") === "true" ? (
            <Redirect to="/cont/dashboard" />
          ) : (
            <Intrare />
          )}
        </Route>
        <Route path={"/cont/dashboard"} component={Dashboard} />
      </Switch>
    );
  }
}

export default withRouter(Cont);
