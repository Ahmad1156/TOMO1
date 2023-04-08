import React, { useEffect, useState } from "react";
import classes from "./Future.module.css";
import Afghan from "../assets/children.jpg";
import { ToastContainer, toast } from "react-toastify";
import { FavoriteOutlined, FavoriteBorderOutlined } from "@mui/icons-material/";
import "react-toastify/dist/ReactToastify.css";
import ShareIcon from "@mui/icons-material/Share";
import freedom from "../assets/freedom.jpg";
import SendIcon from "@mui/icons-material/Send";

const Future = () => {
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
            <h1>Letter from the future: Afghanistan Womens Rights</h1>
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
            <ShareIcon sx={{ color: "blue", fontSize: "35px" }} />
          </div>
        </div>
        <img src={freedom} alt="afghan" />
        <div className={classes.attention}>
          <p>
            <b>Attention</b>: This article is a creative piece set in the future
            and does not depict real-world events. Please do not take its
            content as factual or representative of current reality.
          </p>
        </div>
        <div className={classes.subTitle}>
          <h4>
            <b>Title</b>
          </h4>
        </div>
        <div className={classes.paragraphs} style={{ marginTop: "10px" }}>
          <div className={classes.parag1}>
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
                {/*  <ToastContainer style={{
              fontSize:'18px'
              }}/> */}
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

export default Future;
