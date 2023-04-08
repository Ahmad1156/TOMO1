import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import children from "../assets/children.jpg";
import twitter from "../assets/twitterA.png";
import dancer from "../assets/dancer.jpg";
import classes from "./education.module.css";
import su2 from "../assets/sou2.jpg";

const specificStories = [
  {
    title: "Preserving cultural diversity in Afghanistan ",
    image: dancer,
    description:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, quibusdam. ",
    journalist: "Omid Sobhani",
    date: "2022-03-02",
    newsOutlet: "Side Effects Public Media",
  },
  {
    title: "Preserving cultural diversity in Afghanistan ",
    image: su2,
    description:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, quibusdam. ",
    journalist: "Omid Sobhani",
    date: "2022-03-02",
    newsOutlet: "Side Effects Public Media",
  },
];

const Education = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { id } = useParams();
  const jobsPerPage = 3;
  //const totalPages = 4;
  const totalPages = Math.ceil(specificStories?.length / jobsPerPage);
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <>
      {/* Title */}
      <div className={classes.title}>
        <h2>Education</h2>
      </div>
      <div className={classes.searchBar}>
        <input type="text" placeholder="search..." />
        <button type="submit">search</button>
      </div>
      <div className={classes.educationContainer}>
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
                <b>Author</b>
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
                <b>Rating</b>
              </label>
            </div>
          </div>
        </div>
        <div className={classes.rightSide}>
          <Link
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
            to={`/stories/${id}/content/0`}
          >
            <div className={classes.fitDiv}>
              <div className={classes.singleImage}>
                <h3>FEATURED STORY</h3>
                <img src={children} alt="children" />
              </div>
              <div className={classes.rightImage}>
                <h3>
                  How Afghan women could strive for education under the Taliban
                </h3>
                <div className={classes.singleAuthor}>
                  <p>laura_duice</p>
                  <img src={twitter} alt="twitter" />
                </div>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Consequuntur odio voluptatibus reiciendis quod asperiores quis
                  cumque a libero in iste? Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Fugit sequi minima officia,
                  adipisci quod reiciendis?
                </p>
                <p className={classes.singleDate}>2023-03-24 | The Land</p>
                <div className={classes.footerDiv}>
                  <div>Share</div>
                  <div>Add to Collection</div>
                  <div>Save</div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className={classes.bottomEducation}>
        {specificStories.map((story, index) => (
          <div key={index} className={classes.singleEducation}>
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to={`/stories/${id}/content/${index}`}
            >
              <div className={classes.storySpan}>
                <span>Story</span>
              </div>
              <div className={classes.singleTitle}>
                <h3>{story.title}</h3>
              </div>
              <div className={classes.educationImg}>
                <img src={story.image} alt="Dancer" />
              </div>
              <div className={classes.belowSingleImg}>
                <p>{story.description}</p>
              </div>
              <div className={classes.footerSingle}>
                <div className={classes.journalist}>
                  <p>JOURNALIST</p>
                  <span>{story.journalist}</span>
                </div>
                <div className={classes.date}>
                  <p>DATE</p>
                  <span>{story.date}</span>
                </div>
                <div className={classes.outlet}>
                  <p>NEWS OUTLET</p>
                  <span>{story.newsOutlet}</span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className={classes.pagination}>
        <div className="col-md-6 text-center text-md-left mb-4 mb-md-0"></div>
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
    </>
  );
};

export default Education;
