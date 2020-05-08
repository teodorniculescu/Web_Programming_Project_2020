import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Confirmare from "./Confirmare/Confirmare.js";
import Inregistrare from "./Inregistrare/Inregistrare";
import Intrare from "./Intrare/Intrare";

class Cont extends Component {
  state = {};
  render() {
    return (
      <Switch>
        <Route path={"/cont/confirmare"} component={Confirmare} />
        <Route path={"/cont/inregistrare"} component={Inregistrare} />
        <Route path={"/cont/intrare"} component={Intrare} />
      </Switch>
    );
  }
}

export default Cont;
