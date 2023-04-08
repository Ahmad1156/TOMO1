import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import classes from "./Imaginary.module.css";
import Card1 from "./card/Card";
import afghan from "../assets/children.jpg";

const cards = [
  {
    title: "Afghanistan: The dream of girls education.",
    description: "  Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    image: afghan,
    type: "education",
    footerFirst: "Hii all",
    footerMiddle: "Steps toward a better tomorrow",
    footerEnd: " hosted in afghanistan.2050-05-07",
  },
  {
    title: "Afghanistan: The dream of girls education.",
    description: "  Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    image: afghan,
    type: "education",
    footerFirst: "Hii all",
    footerMiddle: "Steps toward a better tomorrow",
    footerEnd: " hosted in afghanistan.2050-05-07",
  },
  {
    title: "Afghanistan: The dream of girls education.",
    description: "  Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    image: afghan,
    type: "education",
    footerFirst: "Hii all",
    footerMiddle: "Steps toward a better tomorrow",
    footerEnd: " hosted in afghanistan.2050-05-07",
  },
  {
    title: "Afghanistan: The dream of girls education.",
    description: "  Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    image: afghan,
    type: "education",
    footerFirst: "Hii all",
    footerMiddle: "Steps toward a better tomorrow",
    footerEnd: " hosted in afghanistan.2050-05-07",
  },
];

const Imaginary = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const jobsPerPage = 4;
  //const totalPages = 4;
  const totalPages = Math.ceil(cards?.length / jobsPerPage);
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    window.scroll(0, 0);
  },[]);
  return (
    <div className={classes.banner}>
      <div className={classes.bannerHeader}>
        <h1>
          We conduct design fiction workshops, which result in solution-oriented
          dialogues
        </h1>
      </div>
      <div className={classes.bannerBodyHeader}>
        <h3> We can explore the artifacts of these workshops here.</h3>
      </div>
      <div className={classes.centeredDiv}>
        <div className={classes.searchBar}>
          <input type="text" placeholder="search..." />
          <button type="submit">search</button>
        </div>
      </div>
      <div className={classes.bannerBody}>
        <div className={classes.filter}>
          <div className={classes.filterHeader}>Filtered By</div>
          <div className={classes.filterOptions}>
            <div
              className="form-check"
              style={{
                display: "flex",
                flexDirection: "row-reverse",
                alignItems: "center",
                marginTop: "30px",
                justifyContent: "space-between",
                width: "250px",
              }}
            >
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
                style={{ marginLeft: "20px" }}
              />
              <label
                className="form-check-label"
                for="defaultCheck1"
                style={{ marginRight: "30px" }}
              >
                <b>Date</b>
              </label>
            </div>
            <div
              className="form-check"
              style={{
                display: "flex",
                flexDirection: "row-reverse",
                alignItems: "center",
                justifyContent: "space-between",
                width: "250px",
                marginTop: "10px",
              }}
            >
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck2"
                style={{ marginLeft: "20px" }}
              />
              <label className="form-check-label" for="defaultCheck2">
                <b> Podcast</b>
              </label>
            </div>
            <div
              className="form-check"
              style={{
                display: "flex",
                flexDirection: "row-reverse",
                alignItems: "center",
                justifyContent: "space-between",
                width: "250px",
                marginTop: "10px",
              }}
            >
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck2"
                style={{ marginLeft: "20px" }}
              />
              <label className="form-check-label" for="defaultCheck2">
                <b> Videos</b>
              </label>
            </div>
            <div
              className="form-check"
              style={{
                display: "flex",
                flexDirection: "row-reverse",
                alignItems: "center",
                justifyContent: "space-between",
                width: "250px",
                marginTop: "10px",
              }}
            >
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck2"
                style={{ marginLeft: "20px" }}
              />
              <label className="form-check-label" for="defaultCheck2">
                <b>Articles</b>
              </label>
            </div>
            <div
              className="form-check"
              style={{
                display: "flex",
                flexDirection: "row-reverse",
                alignItems: "center",
                justifyContent: "space-between",
                width: "250px",
                marginTop: "10px",
              }}
            >
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck2"
                style={{ marginLeft: "20px" }}
              />
              <label className="form-check-label" for="defaultCheck2">
                <b>Location</b>
              </label>
            </div>
          </div>
        </div>
        <div className={classes.content}>
          <div className={classes.cards}>
            {cards.map((card, i) => (
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                to={`/imaginary/artifact/${i}`}
              >
                <Card1
                  key={i}
                  title={card.title}
                  description={card.description}
                  image={card.image}
                  type={card.type}
                  footerFirst={card.footerFirst}
                  footerSecond={card.footerMiddle}
                  footerThird={card.footerEnd}
                />
              </Link>
            ))}
          </div>
          <div className={classes.pagination}>
            <div className="col-md-5 text-center text-md-left mb-4 mb-md-0"></div>
            <div className="mt-3">
              <div className={`${classes.customPagination}`}>
                <a
                  href="#"
                  className={classes.prev}
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentPage === 1) return;
                    handleClick(currentPage - 1);
                  }}
                  disabled={currentPage === 1}
                >
                  Prev
                </a>
                <div className="d-inline-block mb-5">
                  {pageNumbers.map((pageNumber) => (
                    <a
                      key={pageNumber}
                      href="#"
                      className={pageNumber === currentPage ? "active" : ""}
                      onClick={(e) => {
                        e.preventDefault();
                        if (currentPage === totalPages) return;
                        handleClick(pageNumber);
                      }}
                    >
                      {pageNumber}
                    </a>
                  ))}
                </div>
                <a
                  href="#"
                  className={classes.next}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(currentPage + 1);
                  }}
                  disabled={currentPage === totalPages}
                >
                  Next
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Imaginary;
