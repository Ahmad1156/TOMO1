import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./join.module.css";
import asFacilitator from "../../assets/asFacilitator.jpg";
import asParticipant from "../../assets/asParticipant.jpg";
import FAQ from "./FAQ";

const nextStory = [
  {
    imageSrc: asFacilitator,
    buttonText: "As a facilitator",
    href: "/asFacilitator",
  },
  {
    imageSrc: asParticipant,
    buttonText: "As a participant",
    href: "/asParticipant",
  },
];

const askedQuestion = [
  { question: " Lorem ipsum dolor sit amet consectetur adipisicing elit." },
  { question: " Lorem ipsum dolor sit amet consectetur adipisicing elit." },
  { question: " Lorem ipsum dolor sit amet consectetur adipisicing elit." },
  { question: " Lorem ipsum dolor sit amet consectetur adipisicing elit." },
  { question: " Lorem ipsum dolor sit amet consectetur adipisicing elit." },
];
const JoinUs = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={classes.joinContainer}>
        {/* Title */}
        <div className={classes.title}>
          <h2>Be Part of the next story</h2>
        </div>
        <div className={classes.allNextStory}>
          {nextStory.map((story, i) => (
            <div key={i} className={classes.singleStory}>
              <div className={classes.imgNextStory}>
                <img src={story.imageSrc} alt="Next Story" />
              </div>
              <div className={classes.buttonStory}>
                <Link to={story.href}>
                  <button>{story.buttonText}</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        {/* Frequently Asked Question */}
        <div className={classes.frequentlyTitle}>
          <h2>Frequently Asked Questions</h2>
        </div>
        <div className={classes.askedQuestions}>
          {askedQuestion.map((quest, i) => (
            <FAQ quest={quest} key={i} />
          ))}
        </div>
      </div>
    </>
  );
};

export default JoinUs;
