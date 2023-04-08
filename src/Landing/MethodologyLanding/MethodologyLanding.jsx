import React from "react";
import classes from "./methodology.module.css";
import metho from "../../assets/methodologyLanding.jpg";
import { Link } from "react-router-dom";

const MethodologyLanding = () => {
  return (
    <div>
      <div className={classes.title}>
        <h2>
          <span>Our Methodology</span>
        </h2>
        <div className={classes.methoContainer}>
          <div className={classes.methoImg}>
            <img src={metho} alt={"Methodology"} />
          </div>
          <div className={classes.leftMethodology}>
            <div className={classes.paragraph}>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
                hic recusandae quisquam asperiores repellat facilis nulla nobis.
                Repellendus, praesentium odit? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Eligendi quibusdam, facere tempore
                dicta consequuntur debitis voluptates ab ratione nostrum
                deserunt.
              </p>
            </div>
            <div className={classes.buttonMetho}>
              <Link to='/methodology'>
              <button>Learn More</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MethodologyLanding;
