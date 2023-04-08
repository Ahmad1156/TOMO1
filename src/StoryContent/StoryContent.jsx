import React, { useEffect, useState } from "react";
import classes from "./storyContent.module.css";
import Afghan from "../assets/children.jpg";
import AfghanMap from "../assets/afghanMap.jpg";
import sendMessage from "../assets/send-message.png";
import { ToastContainer, toast } from "react-toastify";
import { FavoriteOutlined, FavoriteBorderOutlined } from "@mui/icons-material/";
import "react-toastify/dist/ReactToastify.css";
import ShareIcon from "@mui/icons-material/Share";
import elie from "../assets/elie.jpeg";
import SendIcon from "@mui/icons-material/Send";

const StoryContent = () => {
  const notify = () =>
    toast.success("Your comment was sent for moderation", {
      style: {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      },
    });
  const [comment, setComment] = useState("");
  const [like, setLike] = useState(false);
  const handleComment = (e) => {
    e.preventDefault();
    const name = prompt("what is your name");
    notify();
    setComment("");
  };

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className={classes.allPage}>
      <div className={classes.firstSection}>
        <div className={classes.header}>
          <div className={classes.headerTitle}>
            <h2>How Afghan could strive for education under the Taliban ?</h2>
          </div>
          <div className={classes.headerIcons}>
            <span
              style={{
                fontSize: "20px",
                marginRight: "20px",
              }}
            >
              500
            </span>
            {like ? (
              <FavoriteOutlined
                sx={{ color: "red", fontSize: "35px", marginRight: "25px" }}
                onClick={() => setLike(!like)}
              />
            ) : (
              <FavoriteBorderOutlined
                sx={{ fontSize: "35px", marginRight: "25px" }}
                onClick={() => setLike(!like)}
              />
            )}
            <ShareIcon
              sx={{
                color: "white",
                fontSize: "40px",
                borderRadius: "50%",
                padding: "3%",
                backgroundColor: "rgb(34, 71, 115)",
              }}
            />
          </div>
        </div>
        <img src={Afghan} alt="afghan" />
        <div className={classes.author}>
          <div className={classes.ownerImg}>
            <img
              style={{ width: "150px", height: "100px" }}
              src={elie}
              alt="Elie Hannouch"
            />
          </div>
          <div className={classes.authorData}>
            <p>
              <b>Elie Hannouch</b>
            </p>
            <p>
              <b>Published: </b> Sunday, April 2, 2023
            </p>
          </div>
        </div>
        <div className={classes.paragraph1}>
          <div className={classes.subTitle}>
            <h4>
              <b>Title 1</b>
            </h4>
          </div>
          <div className={classes.parag0}>
            <p>
              {" "}
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
              consequuntur assumenda cupiditate culpa sapiente voluptas,
              obcaecati suscipit tempora architecto. Nemo nam enim accusantium
              iure velit similique esse laborum quibusdam voluptatum. Lorem
              ipsum dolor sit, amet consectetur adipisicing elit. Nisi
              consequuntur assumenda cupiditate culpa sapiente voluptas,
              obcaecati suscipit tempora architecto. Nemo nam enim accusantium
              iure velit similique esse laborum quibusdam voluptatum. Lorem
              ipsum dolor sit, amet consectetur adipisicing elit. Nisi
              consequuntur assumenda cupiditate culpa sapiente voluptas,
              obcaecati suscipit tempora architecto. Nemo nam enim accusantium
              iure velit similique esse laborum quibusdam voluptatum. Lorem
              ipsum dolor sit, amet consectetur adipisicing elit. Nisi
              consequuntur assumenda cupiditate culpa sapiente voluptas,
              obcaecati suscipit tempora architecto. Nemo nam enim accusantium
              iure velit similique esse laborum quibusdam voluptatum.
              <br />
            </p>
          </div>
        </div>
      </div>
      <div className={classes.section2}>
        <img src={AfghanMap} alt="afghanMap" />
        <div className={classes.subTitle1}>
          <h4>
            <b>Title2</b>
          </h4>
        </div>
        <div className={classes.paragraphs}>
          <div className={classes.parag1}>
            <p>
              {" "}
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
              consequuntur assumenda cupiditate culpa sapiente voluptas,
              obcaecati suscipit tempora architecto. Nemo nam enim accusantium
              iure velit similique esse laborum quibusdam voluptatum. Lorem
              ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum
              dolor sit, amet consectetur adipisicing elit. Nisi consequuntur
              assumenda cupiditate culpa sapiente voluptas, obcaecati suscipit
              tempora architecto. Nemo nam enim accusantium iure velit similique
              esse laborum quibusdam voluptatum. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Nisi consequuntur assumenda
              cupiditate culpa sapiente voluptas, obcaecati suscipit tempora
              architecto. Nemo nam enim accusantium iure velit similique esse
              laborum quibusdam voluptatum. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Nisi consequuntur assumenda
              cupiditate culpa sapiente voluptas, obcaecati suscipit tempora
              architecto. Nemo nam enim accusantium iure velit similique esse
              laborum quibusdam voluptatum. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Nisi consequuntur assumenda
              cupiditate culpa sapiente voluptas, obcaecati suscipit tempora
              architecto. Nemo nam enim accusantium iure velit similique esse
              laborum quibusdam voluptatum. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Nisi consequuntur assumenda
              cupiditate culpa sapiente voluptas, obcaecati suscipit tempora
              architecto. Nemo nam enim accusantium iure velit similique esse
              laborum quibusdam voluptatum. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Nisi consequuntur assumenda
              cupiditate culpa sapiente voluptas, obcaecati suscipit tempora
              architecto. Nemo nam enim accusantium iure velit similique esse
              laborum quibusdam voluptatum. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Nisi consequuntur assumenda
              cupiditate culpa sapiente voluptas, obcaecati suscipit tempora
              architecto. Nemo nam enim accusantium iure velit similique esse
              laborum quibusdam voluptatum. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Nisi consequuntur assumenda
              cupiditate culpa sapiente voluptas, obcaecati suscipit tempora
              architecto. Nemo nam enim accusantium iure velit similique esse
              laborum quibusdam voluptatum. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Nisi consequuntur assumenda
              cupiditate culpa sapiente voluptas, obcaecati suscipit tempora
              architecto. Nemo nam enim accusantium iure velit similique esse
              laborum quibusdam voluptatum. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Nisi consequuntur assumenda
              cupiditate culpa sapiente voluptas, obcaecati suscipit tempora
              architecto. Nemo nam enim accusantium iure velit similique esse
              laborum quibusdam voluptatum. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Nisi consequuntur assumenda
              cupiditate culpa sapiente voluptas, obcaecati suscipit tempora
              architecto. Nemo nam enim accusantium iure velit similique esse
              laborum quibusdam voluptatum.
            </p>
          </div>
        </div>

        <div className={classes.CommentSection}>
          <div className={classes.titleCommment}>
            <h2 className={classes.CommentHeader}>
              <span>Comments</span>
            </h2>
          </div>
          <div className={classes.allComments}>
            <div
              className={classes.commentInfo}
              style={{ marginBottom: "20px" }}
            >
              <div className={classes.person}>
                <p>
                  <b>Mustafa:</b>
                </p>
              </div>
              <div className={classes.commentContent}>
                <p>Great Article</p>
              </div>
            </div>
            <div
              className={classes.commentInfo}
              style={{ marginBottom: "10px" }}
            >
              <div className={classes.person}>
                <p>
                  <b>Mustafa:</b>
                </p>
              </div>
              <div className={classes.commentContent}>
                <p>Great Article</p>
              </div>
            </div>
          </div>
          <div className={classes.formComment}>
            <form style={{ marginTop: "30px" }}>
              <div className={classes.commentInput}>
                <div className={classes.typeComment}>
                  <input
                    type="text"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  style={{ border: "none", background: "transparent" }}
                  onClick={handleComment}
                >
                  <div className={classes.iconPush}>
                    <SendIcon sx={{ color: "#2563eb", fontSize: "40px" }} />
                  </div>
                  <ToastContainer
                    style={{
                      fontSize: "18px",
                    }}
                  />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryContent;
