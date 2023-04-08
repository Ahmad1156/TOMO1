import React, { useEffect } from "react";
import methodology from "../assets/methodology.jpg";
import classes from "./methodology.module.css";
import firstImage from "../assets/firstImage.jpg";
import secondImage from "../assets/secondImage.jpg";
import thirdImage from "../assets/thirdImage.jpg";
import fourthImage from "../assets/fourthImage.jpg";
import { Link } from "react-router-dom";

const steps = [
  {
    image: firstImage,
    title: "Where does our content come from?",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus libero consequuntur debitis, reprehenderit quae maiores! Sed eaque vero eum assumenda, neque debitis dolorem excepturi eos suscipit maiores libero ipsam quaerat! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, quam. assumenda.",
  },
  {
    image: secondImage,
    title: "What is a dialogue-promoting workshop?",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus libero consequuntur debitis, reprehenderit quae maiores! Sed eaque vero eum assumenda, neque debitis dolorem excepturi eos suscipit maiores libero ipsam quaerat! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, quam. assumenda.",
  },
  {
    image: thirdImage,
    title: "Why Design Fiction?",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus libero consequuntur debitis, reprehenderit quae maiores! Sed eaque vero eum assumenda, neque debitis dolorem excepturi eos suscipit maiores libero ipsam quaerat! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, quam. assumenda.",
  },
  {
    image: fourthImage,
    title: "Why do we focus on features and solutions?",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus libero consequuntur debitis, reprehenderit quae maiores! Sed eaque vero eum assumenda, neque debitis dolorem excepturi eos suscipit maiores libero ipsam quaerat! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, quam. assumenda.",
  },
];

const Methodology = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={classes.methodologyContainer}>
      <div className={classes.bannerMethodology}>
        <img src={methodology} alt="methodology" />
      </div>
      {steps.map((step, i) =>
        i % 2 === 0 ? (
          <div className={classes.firstStep} key={i}>
            <div className={classes.firstImg}>
              <img src={step.image} alt="first Image" />
            </div>
            <div className={classes.right}>
              <div className={classes.title}>
                <h2>Where does our content come from?</h2>
              </div>
              <div className={classes.underTitle}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus libero consequuntur debitis, reprehenderit quae
                  maiores! Sed eaque vero eum assumenda, neque debitis dolorem
                  excepturi eos suscipit maiores libero ipsam quaerat!Sed eaque
                  vero eum assumenda, neque debitis dolorem excepturi eos
                  suscipit maiores libero ipsam quaerat!excepturi eos suscipit
                  maiores libero ipsam quaerat!Sed eaque vero eum assumenda,
                  neque debitis dolorem excepturi eos suscipit maiores libero
                  ipsam quaerat!
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className={classes.SecondStep} key={i}>
            <div className={classes.right}>
              <div className={classes.title}>
                <h2>Where does our content come from?</h2>
              </div>
              <div className={classes.underTitle}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus libero consequuntur debitis, reprehenderit quae
                  maiores! Sed eaque vero eum assumenda, neque debitis dolorem
                  excepturi eos suscipit maiores libero ipsam quaerat!Sed eaque
                  vero eum assumenda, neque debitis dolorem excepturi eos
                  suscipit maiores libero ipsam quaerat!excepturi eos suscipit
                  maiores libero ipsam quaerat!Sed eaque vero eum assumenda,
                  neque debitis dolorem excepturi eos suscipit maiores libero
                  ipsam quaerat!
                </p>
              </div>
            </div>
            <div className={classes.firstImg}>
              <img src={step.image} alt="second Image" />
            </div>
          </div>
        )
      )}
      <div className={classes.beforeFooter}>
        <p>
          If you want to see how common people in this society <br /> envision
          their future, click here:{" "}
        </p>
        <div className={classes.buttonStory}>
          <Link to={'/imaginary'}>
          <button>See the artifacts</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Methodology;
