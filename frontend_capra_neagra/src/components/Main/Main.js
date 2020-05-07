import React from "react";
import Acasa from "../Acasa/Acasa";
import Cont from "../Cont/Cont";
import Biciclete from "../Acasa/Acasa";
import Accesorii from "../Accesorii/Accesorii";
import Textile from "../Textile/Textile";
import Cumparaturi from "../Cumparaturi/Cumparaturi";
import styles from "./Main.module.scss";
import { HashRouter, Switch, Route } from "react-router-dom";

class Main extends React.Component {
  render() {
    return (
      <div className={styles.content} id="content">
        <HashRouter basename="/">
          <Switch>
            <Route exact path={"/"} component={Acasa} />
            <Route exact path={"/cont"} component={Cont} />
            <Route exact path={"/biciclete"} component={Biciclete} />
            <Route exact path={"/accesorii"} component={Accesorii} />
            <Route exact path={"/textile"} component={Textile} />
            <Route exact path={"/cumparaturi"} component={Cumparaturi} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default Main;
