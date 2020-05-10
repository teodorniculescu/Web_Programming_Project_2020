import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import Biciclete from "./Biciclete/Biciclete";
import Accesorii from "./Accesorii/Accesorii";
import Textile from "./Textile/Textile";
import ToateProdusele from "./ToateProdusele";
import ProdusID from "./ProdusID";

class Produse extends Component {
  state = {};
  render() {
    return (
      <Switch>
        <Route exact path={"/produse"} component={ToateProdusele} />
        <Route exact path={"/produse/:id"} component={ProdusID} />
        <Route exact path={"/produse/biciclete"} component={Biciclete} />
        <Route exact path={"/produse/accesorii"} component={Accesorii} />
        <Route exact path={"/produse/textile"} component={Textile} />
      </Switch>
    );
  }
}

export default withRouter(Produse);
