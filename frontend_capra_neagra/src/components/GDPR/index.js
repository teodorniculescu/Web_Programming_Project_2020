import React, { Component } from "react";
import styles from "./Styles.module.scss";
class GDPR extends Component {
  state = {};
  hideAll() {
    document.getElementById("gdpr_dark_bg").style.visibility = "hidden";
    document.getElementById("gdpr_about").style.visibility = "hidden";
    document.getElementById("gdpr_manage").style.visibility = "hidden";
  }
  visibilityManage() {
    document.getElementById("gdpr_manage").style.visibility = "visible";
  }
  hideManage() {
    document.getElementById("gdpr_manage").style.visibility = "hidden";
  }
  getAboutText() {
    return (
      <div>
        DESPRE COOKIES Noi şi partenerii noştri procesăm informaţiile despre
        dumneavoastră, despre dispozitivele dumneavoastră şi comportamentul
        dumneavoastră online utilizând tehnologii cum ar fi cookies pentru a
        presta, analiza şi îmbunătăţi serviciile noastre; pentru a personaliza
        conţinutul sau pentru a face publicitate pe acest site sau pe altele, pe
        aplicaţii sau platforme şi pentru a furniza caracteristici de rețele
        sociale.
        <br></br>
        <br></br>
        Doriţi să acceptaţi cookie-uri?
        <br></br>
        <br></br>
        Pentru a modifica setările pentru modulele cookie, faceți clic pe
        Gestionare module cookie
        <br></br>
        <br></br>
        <div className={styles.about_buttons}>
          <button
            className={styles.yes_button}
            type="button"
            onClick={this.hideAll}
          >
            Da
          </button>
          <button
            className={styles.manage_button}
            type="button"
            onClick={this.displayManage}
          >
            Gestionare module cookie
          </button>
        </div>
      </div>
    );
  }
  getManageText() {
    return (
      <div>
        GESTIONAŢI-VĂ SETĂRILE Vă rugăm alegeţi mai jos setările pentru acest
        site. Puteţi activa/permite sau dezactiva/respinge cookie-uri pe
        categorii sau individual. Setările dumneavoastră nu se vor aplica
        automat pe toate companiile aparţinând Familiei de firme Walt Disney pe
        care le vizitaţi. Vă puteţi modifica setările oricând revenind pe acest
        site şi accesând link-ul Setări Cookies. Pentru informaţii suplimentare
        vă rugăm citiți Politica noastră sau politica terţelor părţi pe
        linkurile disponibile mai jos.
      </div>
    );
  }
  render() {
    return (
      <div className={styles.gdpr}>
        <div id="gdpr_dark_bg" className={styles.dark_bg}></div>
        <div id="gdpr_about" className={styles.about}>
          {this.getAboutText()}
        </div>
        <div id="gdpr_manage" className={styles.manage}>
          {this.getManageText()}
        </div>
      </div>
    );
  }
}

export default GDPR;
