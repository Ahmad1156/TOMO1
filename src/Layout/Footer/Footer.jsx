import React from "react";
import classes from "./footer.module.css";
import dtec from "../../assets/dtec.jpg";
import Munchen from "../../assets/munchen.jpg";
import Media from "../../assets/bayern.jpg";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <footer
      className={`text-center text-lg-start text-white ${classes.footerContainer}`}
      style={{
        background:
          "linear-gradient( 90deg, rgba(43, 68, 202, 1) 0%, rgba(14, 208, 235, 1) 70%)",
          marginTop:'150px'
      }}
    >
      <div>
        <section>
          <div
            className={`row ${classes.widthFooter}`}
            style={{
              width: "100%",
            }}
          >
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold text-center">
                Company name
              </h6>
              <div className={classes.partners}>
                <img src={dtec} alt="dtec" className={classes.partnerLogo} />
                <img
                  src={Munchen}
                  alt="Munchen"
                  className={classes.partnerLogo}
                />
                <img
                  src={Media}
                  alt="Media Lab Bayern"
                  className={classes.partnerLogo}
                />
              </div>
            </div>

            <hr className="w-100 clearfix d-md-none" />

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
              <p>
                <a className="text-white">elie</a>
              </p>
              <p>
                <a className="text-white">lorem</a>
              </p>
              <p>
                <a className="text-white">elie</a>
              </p>
              <p>
                <a className="text-white">lorem</a>
              </p>
            </div>

            <hr className="w-100 clearfix d-md-none" />

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">
                Useful links
              </h6>
              <p>
                <a className="text-white">Your Account</a>
              </p>
              <p>
                <a className="text-white">Become an Affiliate</a>
              </p>
              <p>
                <a className="text-white">Shipping Rates</a>
              </p>
              <p>
                <a className="text-white">Help</a>
              </p>
            </div>

            <hr className="w-100 clearfix d-md-none" />

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
              <p>
                <i className="fas fa-home mr-3"></i> New York, NY 10012, US
              </p>
              <p>
                <i className="fas fa-envelope mr-3"></i> info@gmail.com
              </p>
              <p>
                <i className="fas fa-phone mr-3"></i> + 01 234 567 88
              </p>
              <p>
                <i className="fas fa-print mr-3"></i> + 01 234 567 89
              </p>
            </div>
          </div>
        </section>

        <hr className="my-3" />

        <section className="p-3 pt-0">
          <div className="row d-flex align-items-center">
            <div className="col-md-7 col-lg-8 text-center text-md-start">
              <div className="p-3">
                © 2023 Copyright:
                <a className="text-white" href="#">
                  Tomo Team
                </a>
              </div>
            </div>

            <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
              <a
                className="btn btn-outline-light btn-floating m-1 text-white"
                role="button"
              >
                <i className="fab fa-facebook"></i>
              </a>

              <a
                className="btn btn-outline-light btn-floating m-1 text-white"
                role="button"
              >
                <i className="fab fa-twitter"></i>
              </a>

              <a
                className="btn btn-outline-light btn-floating m-1 text-white"
                role="button"
              >
                <i className="fab fa-google"></i>
              </a>

              <a
                className="btn btn-outline-light btn-floating m-1 text-white"
                role="button"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
