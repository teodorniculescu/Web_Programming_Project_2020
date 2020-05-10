import React, { Component } from "react";
import styles from "./Styles.module.scss";
class GDPR extends Component {
  constructor(props) {
    super(props);
    this.state = { performance: true, publicity: true };
    this.handlePerformance = this.handlePerformance.bind(this);
    this.handlePublicity = this.handlePublicity.bind(this);
  }

  state = {};
  getStringBool(value) {
    return value ? "true" : "false";
  }
  setPreferences() {
    localStorage.setItem(
      "Performance",
      this.getStringBool(this.state.performance)
    );
    localStorage.setItem("Publicity", this.getStringBool(this.state.publicity));
    localStorage.setItem("GDPR", "true");
  }
  hideAll = () => {
    document.getElementById("gdpr_dark_bg").style.visibility = "hidden";
    document.getElementById("gdpr_about").style.visibility = "hidden";
    document.getElementById("gdpr_manage").style.visibility = "hidden";
    this.enableScroll();
    this.setPreferences();
  };
  visibilityManage() {
    document.getElementById("gdpr_manage").style.visibility = "visible";
  }
  hideManage() {
    document.getElementById("gdpr_manage").style.visibility = "hidden";
  }
  getAboutText() {
    return (
      <div>
        <h3>DESPRE COOKIES</h3>
        Noi şi partenerii noştri procesăm informaţiile despre dumneavoastră,
        despre dispozitivele dumneavoastră şi comportamentul dumneavoastră
        online utilizând tehnologii cum ar fi cookies pentru a presta, analiza
        şi îmbunătăţi serviciile noastre; pentru a personaliza conţinutul sau
        pentru a face publicitate pe acest site sau pe altele, pe aplicaţii sau
        platforme şi pentru a furniza caracteristici de rețele sociale.
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
            onClick={this.visibilityManage}
          >
            Gestionare module cookie
          </button>
        </div>
      </div>
    );
  }
  getSlider(title, description, setFunction) {
    return (
      <div className={styles.slider_container}>
        <div className={styles.slider_area}>
          <div className={styles.left}>{title}</div>
          <div className={styles.right}>
            <label className={styles.switch}>
              <input
                type="checkbox"
                defaultChecked={true}
                onClick={setFunction}
              ></input>
              <span className={styles.slider}></span>
            </label>
          </div>
        </div>
        <br></br>
        <div>{description}</div>
        <br></br>
      </div>
    );
  }
  getMangatory() {
    const title = "Necesare";
    const description =
      "Esenţial pentru a furniza acest serviciu sau alte caracteristici. ";
    return (
      <div className={styles.slider_container}>
        <div className={styles.slider_area}>
          <div className={styles.left}>{title}</div>
          <div className={styles.right}>Active Permanent ✓</div>
        </div>
        <br></br>
        <div>{description}</div>
        <br></br>
      </div>
    );
  }
  getManageButton() {
    return (
      <div className={styles.about_buttons}>
        <button
          className={styles.yes_button}
          type="button"
          onClick={this.hideAll}
        >
          Salveaza setarile mele
        </button>
        <button
          className={styles.anulare_button}
          type="button"
          onClick={this.hideManage}
        >
          Anulare
        </button>
      </div>
    );
  }
  getManageText() {
    const text1 = "Performanţă & Analiză";
    const text2 = "Publicitate";
    const descr1 =
      "Utilizat de noi sau de parteneri terţe părţi pentru a măsura şi a analiza performanţa şi utilizarea siteului şi pentru a ajuta la îmbunătăţirea serviciilor noastre. ";
    const descr2 =
      "Utilizată de către noi sau de o terţă parte pentru a colecta informaţii privind comportamentul dumneavoastră online sau privind locaţia pentru a prezenta conţinutul relevant şi personalizat sau publicitate pe acesta sau pe alte pagini, aplicaţii sau platforme, inclusiv rețele sociale. ";
    return (
      <div>
        <div className={styles.manage_title}>
          <h3>GESTIONAŢI-VĂ SETĂRILE</h3>
        </div>
        <hr></hr>
        Vă rugăm alegeţi mai jos setările pentru acest site. Puteţi
        activa/permite sau dezactiva/respinge cookie-uri pe categorii sau
        individual. Setările dumneavoastră nu se vor aplica automat pe toate
        companiile aparţinând Familiei de firme Walt Disney pe care le vizitaţi.
        Vă puteţi modifica setările oricând revenind pe acest site şi accesând
        link-ul Setări Cookies.
        <br></br>
        <br></br>
        Pentru informaţii suplimentare vă rugăm citiți Politica noastră sau
        politica terţelor părţi pe linkurile disponibile mai jos.
        <br></br>
        <br></br>
        <br></br>
        {this.getMangatory()}
        {this.getSlider(text1, descr1, this.handlePerformance)}
        {this.getSlider(text2, descr2, this.handlePublicity)}
        {this.getManageButton()}
      </div>
    );
  }

  handlePerformance() {
    this.setState({ performance: !this.state.performance });
  }
  handlePublicity() {
    this.setState({ publicity: !this.state.publicity });
  }

  disableScroll() {
    document.body.style.overflowY = "hidden";
  }
  enableScroll() {
    document.body.style.overflowY = "visible";
  }
  componentDidMount() {
    if (localStorage.getItem("GDPR") !== "true") this.disableScroll();
  }

  getGDPR() {
    if (localStorage.getItem("GDPR") === "true") return null;
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

  render() {
    return <div>{this.getGDPR()}</div>;
  }
}

export default GDPR;
