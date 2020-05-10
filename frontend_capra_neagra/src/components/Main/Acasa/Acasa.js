import React from "react";
import { withRouter } from "react-router-dom";
import Box from "../Box/Box";
import acasa1 from "./acasa1.jpg";
import acasa2 from "./acasa2.jpg";
import styles from "./Styles.module.scss";

class Acasa extends React.Component {
  getPost(img, title, description) {
    return (
      <Box>
        <div className={styles.post}>
          <div className={styles.img_container}>
            <img src={img} alt="img"></img>
          </div>

          <div className={styles.upper}>
            <div className={styles.title}>{title}</div>
          </div>
          <hr></hr>
          <div className={styles.lower}>
            <div className={styles.more}>{description}</div>
          </div>
        </div>
      </Box>
    );
  }
  render() {
    const t1 = "Start Inscrieri Salomon EcoRun Moieciu 2020";
    const d1 =
      "Deschidem inscrierile pentru Salomon EcoRun Moieciu 2020! Incepem in data de 30 Ianuarie ora 21:00 cu o campanie speciala pe […]";
    const t2 = "Un test spre Campionatul Mondial";
    const d2 =
      "– Leonard Mitrica, vicecampion EcoMarathon 2018 – Loc 2, 3h:30min:10 Când vine vorba despre pasiuni, pe lângă alergare care e […]";
    return (
      <div>
        {this.getPost(acasa1, t1, d1)}
        {this.getPost(acasa2, t2, d2)}
      </div>
    );
  }
}
export default withRouter(Acasa);
