import React from "react";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import carousel1 from "../../assets/carousel1.jpg";
import classes from "./first.module.css";

// Import Swiper styles
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

SwiperCore.use([Navigation, Autoplay]);

const content = [
  {
    text: "Dialogue is a valuable communication tool that aims to clarify, understand, uncover something or listen to potential participants traditionally underrepresented in public spaces. It is a non-confrontational form of conversation, focussing on understanding diverse perspectives.",
  },
  {
    text: "Furthermore, dialogue and mediation can lead to the prevention and/or mitigation of conflicts, especially if they are implemented in a secure space for reflection and the exchange of experiences, as is the future.",
  },
  {
    text: "Participants, with help of a trained moderator, imagine specific peaceful and constructive features on conflicted topics in their community. During the workshop, they dialogue about it and create an “artifact” from that future that is published in the magazine: a news piece, a viral tweet, an opinion piece, a video, a podcast, an article, and the list goes on.",
  },
  {
    text: "How can TOMO publish journalistic content if the workshops are about the future? We are convinced that the future is a safe space in which diverse audiences can not only develop their creativity but also discuss the problems they face today to think about proximity solutions.",
  },
  {
    text: "However, this is not the only content published by TOMO. We also take the opportunity of the workshops to get to know stories, characters, problems, and solutions that war-affected communities are experiencing and as journalists were unaware of.",
  },
  {
    text: "These stories, of course, are not fiction. After the workshops, we take the time to make a quality report, which we then publish in TOMO through different formats, such as reports, chronicles, narrative podcasts, and videos, with a clear constructive solution-oriented approach.",
  },
];

const FirstContainer = () => {
  return (
    <div className={classes.imageBackground}>
      <div className={classes.carousel}>
        <Swiper
          navigation={true}
          className={classes.swiper}
          autoplay={{ delay: 2000 }}
          loop={true}
          speed={1000}
        >
          {content.map((c, i) => (
            <SwiperSlide key={i} className={classes.swiperSlide}>
              <Link to="/methodology">
                <div className={classes.box}>
                  <img src={carousel1} alt={"carousel"} />
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FirstContainer;
