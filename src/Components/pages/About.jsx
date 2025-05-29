import React from "react";
import "../../assets/AboutPage.css";
import { DrawingJewelry, Founder } from "../../assets/images";

const AboutPage = () => (
  <div className="about-page">
    {/* About the Founder Section */}
    <section className="founder-section">
      <div className="founder-text">
        <small>Meet the founder</small>
        <h2>ABOUT THE FOUNDER</h2>
        <p className="subtitle">
          FUSCE EGESTAS SEM URNA, ID PLACERAT VELIT DICTUM EGET. MAURIS IN DOLOR VELIT.
        </p>
        <p>
          Praesent fringilla dolor nec mauris euismod, eu rutrum mauris tincidunt. Mauris
          tincidunt, sem eu convallis dictum, massa erat cursus enim, nec dictum sem
          mauris eu erat. Suspendisse potenti. Pellentesque habitant morbi tristique
          senectus et netus et malesuada fames ac turpis egestas.
        </p>
        <p>
          Mauris in dolor velit. Suspendisse potenti. Pellentesque habitant morbi
          tristique senectus et netus et malesuada fames ac turpis egestas.
        </p>
      </div>
      <div className="founder-image">
        <img
          src={Founder}
          alt="Founder"
        />
      </div>
    </section>

    {/* How It All Started Section */}
    <section className="started-section">
      <div className="started-image">
        <img
          src={DrawingJewelry}
          alt="Drawing Jewelry"
        />
      </div>
      <div className="started-content">
        <div className="started-title">
          <small>About us</small>
          <h2>HOW IT ALL STARTED</h2>
        </div>
        <div className="started-text">
          <h4>
            ETIAM VIVAMUS MATTIS MAURIS, ET TEMPOR URNA LUCTUS NON.
          </h4>
          <p>
            Mauris in dolor velit. Suspendisse potenti. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
          </p>
          <p>
            <b>700+ Established</b><br />
            Mauris in dolor velit. Suspendisse potenti. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
          </p>
          <p>
            <b>700+ Vision International</b><br />
            Mauris in dolor velit. Suspendisse potenti. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
          </p>
          <p>
            <b>700+ Super Potential</b><br />
            Mauris in dolor velit. Suspendisse potenti. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
          </p>
          <p>
            <b>200+ Installations</b><br />
            Mauris in dolor velit. Suspendisse potenti. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
          </p>
        </div>
      </div>
    </section>
  </div>
);

export default AboutPage;