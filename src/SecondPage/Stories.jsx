import React, { useState } from "react";
import classes from "./stories.module.css";
import Card from "./Card/Card";
import education from "../assets/education.jpg";
import sustainability from "../assets/sustainability.jpg";
import peace from "../assets/peace_building.jpg";
import economic from "../assets/economic_development.jpg";
import humanRight from "../assets/human_rights.jpg";
import politics from "../assets/politics.jpg";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const stories = [
  {
    name: "Education",
    imagesrc: education,
  },
  {
    name: "Sustainability",
    imagesrc: sustainability,
  },
  {
    name: "Peace Building",
    imagesrc: peace,
  },
  {
    name: "Economic<br>Development",
    imagesrc: economic,
  },
  {
    name: "Human Rights",
    imagesrc: humanRight,
  },
  {
    name: "Politics",
    imagesrc: politics,
  },
];

const Stories = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success(
      "we will take your suggestion into consideration,we will back to you soon"
    );
  };
  return (
    <>
      {/* Title */}
      <div className={classes.banner}>
        <div className={classes.storiesTitle}>
          <h2>Stories</h2>
        </div>
        <div className={classes.description}>
          <p>
            In these stories, authors often speculate about future technologies
            such as artificial intelligence, virtual reality, genetic
            engineering, and space travel. They also imagine how changes in
            politics, economics, and social norms might shape the world of the
            future.
          </p>
        </div>
        <div className={classes.storiesContainer}>
          <div className={classes.allCards}>
            {stories.map((story, i) => (
              <div>
                <Link to={`/stories/${i}`}>
                  <Card key={i} name={story.name} imagesrc={story.imagesrc} />
                </Link>
              </div>
            ))}
          </div>
          <div className={classes.belowCards}>
            <div className={classes.heading1}>
              <h2>Do you know a new topic that interests you?Let us know!</h2>
            </div>
            <div className={classes.heading2}>
              <p>Our team values your input and will consider it.</p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className={classes.searchBar}>
                <input
                  type="text"
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Enter the topic title / description"
                />
                <button type="submit">send</button>
              </div>
              <ToastContainer
                style={{
                  fontSize: "18px",
                }}
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stories;
