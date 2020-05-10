import React from "react";
import Acasa from "./Acasa/Acasa";
import Cont from "./Cont/Cont";
import Produse from "./Produse/Produse";
import Cumparaturi from "./Cumparaturi/Cumparaturi";
import Contact from "./Contact";
import styles from "./Main.module.scss";
import FAQ from "./FAQ";

import { withRouter, Switch, Route } from "react-router-dom";

class Main extends React.Component {
  render() {
    return (
      <div className={styles.content} id="content">
        <Switch>
          <Route exact path={"/"} component={Acasa} />
          <Route path={"/cont"} component={Cont} />
          <Route path={"/produse"} component={Produse} />
          <Route exact path={"/cumparaturi"} component={Cumparaturi} />
          <Route exact path={"/contact"} component={Contact} />
          <Route exact path={"/faq"} component={FAQ} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(Main);
