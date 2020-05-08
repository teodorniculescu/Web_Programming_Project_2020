import React from "react";
import Acasa from "./Acasa/Acasa";
import Biciclete from "./Biciclete/Biciclete";
import Cont from "./Cont/Cont";
import Accesorii from "./Accesorii/Accesorii";
import Textile from "./Textile/Textile";
import Cumparaturi from "./Cumparaturi/Cumparaturi";
import styles from "./Main.module.scss";
import { Switch, Route } from "react-router-dom";

class Main extends React.Component {
  render() {
    return (
      <div className={styles.content} id="content">
        <Switch>
          <Route exact path={"/"} component={Acasa} />
          <Route path={"/cont"} component={Cont} />
          <Route exact path={"/biciclete"} component={Biciclete} />
          <Route exact path={"/accesorii"} component={Accesorii} />
          <Route exact path={"/textile"} component={Textile} />
          <Route exact path={"/cumparaturi"} component={Cumparaturi} />
        </Switch>
      </div>
    );
  }
}

export default Main;
