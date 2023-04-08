import React, { useState } from "react";
import arrow from "../../assets/arrow1.png";
import { Collapse } from "react-bootstrap";
import classes from "./join.module.css";

const FAQ = ({ quest }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={classes.rowQuestion}>
        <div className={classes.row}>
          <div
            className={`${classes.icon} ${open ? classes.rotate : ""}`}
            onClick={() => setOpen(!open)}
          >
            {" "}
            <img src={arrow} alt="arrow" />
          </div>
          <div className={classes.questionText}>{quest.question}</div>
        </div>
        <Collapse in={open}>
          <div className={classes.answers}>
            <hr />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium ipsa sed harum, delectus culpa voluptatem eaque eius
              doloribus fugit a.
            </p>
          </div>
        </Collapse>
      </div>
    </>
  );
};

export default FAQ;
