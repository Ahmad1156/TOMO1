import React from "react";
import logo from "../../assets/TomoLogo.png";
import classes from "./about.module.css";

const About = () => {
  return (
    <div id="about" style={{ marginBottom: "50px", marginTop: "50px" }}>
      {/* Title */}
      <div className={classes.about}>
        <h2>
          <span>About Us</span>
        </h2>
      </div>
      <div className={classes.aboutContainer}>
        <div className={classes.aboutLogo}>
          <img src={logo} alt={"Tomo Logo"} />
        </div>
        <div className={classes.aboutDescription}>
          <p>
            <b>TOMO</b> was born as an idea of 11 professionals with different
            backgrounds who joined the Media for Peace fellowship, organised by
            Media Lab Bayern, http://dtec.bw and the Universität der Bundeswehr
            München. Our aim was to develop ways to support journalism in
            Lebanon and Afghanistan that de-escalates and promotes peace. Behind
            the creation of TOMO is a clear conviction: the need to improve
            trust between the media and conflict-affected communities. We
            believe that this can happen through dialogue, getting closer to
            communities, and listening to their needs and desires.
          </p>
          <p>
            <b>TOMO</b> is an online magazine whose contents are born out of
            virtual and in-person design fiction workshops that journalists in
            conflict and post-conflict zones create for their audiences.
          </p>
          <p>
            <b>TOMO</b> wants to break down stereotypes, cross barriers, improve
            relations between different groups of people, and promote change,
            solutions, and peace-building.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
