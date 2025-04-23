import React, { useState, useEffect, useRef } from "react";
import { BsThreeDots } from "react-icons/bs";
import { AiFillHeart, AiFillEdit } from "react-icons/ai";
import { FaComment, FaShare } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

import disk from "../../../assets/images/disk.png";
import Wrapper from "../wrapper/PostBox";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import { useAppContext } from "../../../context/appContext";
import PostComment from "./PostComment";
import Commentlst from "./Commentlst";
import Bookmark from "./Bookmark";
import { useNavigate } from "react-router-dom";

const PostBox = React.memo(({ item }) => {
  const { user, likepost, unlikepost, savepost, unsavepost, delPost } =
    useAppContext();

  const loadComment = useRef(false);
  const navigate = useNavigate();
  const postRef = useRef(null);

  const stopCommentload = () => {
    loadComment.current = false;
    console.log("stopComentload");
  };

  const startCommentload = () => {
    loadComment.current = true;
    console.log("startComentload");
  };

  const { userid, location, _id, filetype, postfile, description, createdAt } =
    item;

  const doc = {
    uri: postfile,
  };

  const initialState = {
    liked: false,
    bookmarked: false,
    isReadMore: false,
    isoption: false,
    isDelete: false,
    isComment: false,
    isPost: false,
    likecount: 0,
    commentcount: 0,
    showLikeAnimation: false,
  };

  const [postState, SetPost] = useState(initialState);

  useEffect(() => {
    if (item.likesid.find((like) => like === user._id)) {
      SetPost({
        ...postState,
        liked: true,
        likecount: item.likesid.length,
        commentcount: item.commentsid.length,
      });
    } else {
      SetPost({
        ...postState,
        liked: false,
        likecount: item.likesid.length,
        commentcount: item.commentsid.length,
      });
    }
  }, [item.likesid, user._id]);

  const vidRef = useRef(null);
  const onentry = () => {
    vidRef.current && vidRef.current.play();
  };

  const onleave = () => {
    vidRef.current && vidRef.current.pause();
  };

  const toggleLike = (e) => {
    e.preventDefault();
    const postid = item._id;
    if (postState.liked) {
      unlikepost({ postid });
      SetPost({
        ...postState,
        liked: false,
        likecount: postState.likecount - 1,
      });
    } else {
      likepost({ postid });
      SetPost({
        ...postState,
        liked: true,
        likecount: postState.likecount + 1,
        showLikeAnimation: true,
      });

      // Reset animation after it plays
      setTimeout(() => {
        SetPost((prevState) => ({
          ...prevState,
          showLikeAnimation: false,
        }));
      }, 1000);
    }
  };

  const handleDoubleClick = () => {
    if (!postState.liked) {
      const postid = item._id;
      likepost({ postid });
      SetPost({
        ...postState,
        liked: true,
        likecount: postState.likecount + 1,
        showLikeAnimation: true,
      });

      // Reset animation after it plays
      setTimeout(() => {
        SetPost((prevState) => ({
          ...prevState,
          showLikeAnimation: false,
        }));
      }, 1000);
    }
  };

  const togglesave = (e) => {
    e.preventDefault();
    const postid = item._id;
    if (postState.bookmarked) {
      unsavepost({ postid });
      SetPost({ ...postState, bookmarked: false });
    } else {
      savepost({ postid });
      SetPost({ ...postState, bookmarked: true });
    }
  };

  const toggleOption = () => {
    SetPost({ ...postState, isoption: !postState.isoption });
  };

  const deletePost = (postid) => {
    if (postState.isDelete) {
      SetPost({ ...postState, isDelete: false });
    } else {
      delPost(postid);
      SetPost({ ...postState, isDelete: true });
    }
  };

  const toggleComment = () => {
    SetPost({
      ...postState,
      isComment: !postState.isComment,
      isPost: postState.isComment ? false : postState.isPost,
    });
    loadComment.current = !postState.isComment;
  };

  const toggleReadMore = () => {
    SetPost({ ...postState, isReadMore: !postState.isReadMore });
  };

  const togglepostBar = () => {
    SetPost({
      ...postState,
      isPost: !postState.isPost,
      isComment: postState.isPost ? false : postState.isComment,
    });
  };

  return (
    <Wrapper>
      <motion.div
        ref={postRef}
        className={!postState.isDelete ? "video-post glassmorphism" : "d-none"}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="post-content">
          <div className="post-header">
            <motion.div
              className="userInfo"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <img
                src={userid?.profilePicture}
                alt=""
                className="profile-pic-sm"
              />
              <div className="username-location">
                <span className="username">{userid?.username}</span>
                <p className="location">{location}</p>
              </div>
            </motion.div>
            <div className="post-edit">
              <motion.div
                whileHover={{ rotate: 90 }}
                transition={{ duration: 0.3 }}
              >
                <BsThreeDots
                  className={userid?._id === user._id ? "icon" : "d-none"}
                  onClick={toggleOption}
                />
              </motion.div>

              <AnimatePresence>
                {postState.isoption && (
                  <motion.div
                    className="edit-option glassmorphism"
                    initial={{ opacity: 0, scale: 0.8, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      className="list"
                      whileHover={{ backgroundColor: "rgba(0,0,0,0.05)", x: 5 }}
                      onClick={() => navigate(`/Next Skill/postedit/${_id}`)}
                    >
                      <AiFillEdit className="icon" />
                      <span>Edit</span>
                    </motion.div>
                    <motion.div
                      className="list"
                      whileHover={{
                        backgroundColor: "rgba(255,0,0,0.1)",
                        x: 5,
                      }}
                      onClick={() => deletePost(item._id)}
                    >
                      <MdDelete className="icon" />
                      <span>Delete</span>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="post-image-section" onDoubleClick={handleDoubleClick}>
            {filetype?.substring(0, filetype.indexOf("/")) === "image" ? (
              <motion.img
                className="post-img"
                src={postfile}
                alt=""
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            ) : null}

            {filetype?.substring(0, filetype.indexOf("/")) === "video" ? (
              <video
                className="post-img"
                muted
                loop
                ref={vidRef}
                controls={true}
                onMouseEnter={onentry}
                onMouseLeave={onleave}
              >
                <source type="video/mp4" src={postfile} />
              </video>
            ) : null}

            {filetype?.substring(0, filetype.indexOf("/")) === "audio" ? (
              <div
                className="post-img audio-container"
                onMouseEnter={onentry}
                onMouseLeave={onleave}
              >
                <motion.img
                  src={disk}
                  alt=""
                  className="music-img"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
                <audio
                  className="music-player"
                  loop
                  ref={vidRef}
                  controls={true}
                >
                  <source className="music" type={filetype} src={postfile} />
                </audio>
              </div>
            ) : null}

            {filetype?.substring(0, filetype.indexOf("/")) === "application" ? (
              <div className="post-img">
                <DocViewer
                  className="post-img"
                  pluginRenderers={DocViewerRenderers}
                  documents={[doc]}
                />
              </div>
            ) : null}

            {/* Heart animation on double click */}
            <AnimatePresence>
              {postState.showLikeAnimation && (
                <motion.div
                  className="heart-animation"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 1.5, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <AiFillHeart />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <span className="post-description">
            {postState.isReadMore
              ? description
              : description?.substring(0, 100)}
          </span>
          <span className="more-less">
            {postState.isReadMore ? "...less" : "...more"}
          </span>
        </div>

        <div className="post-option">
          <div className="post-interaction">
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <AiFillHeart
                className={`${postState.liked ? "icon red" : "icon"} like-btn`}
                onClick={toggleLike}
              />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <FaComment className="icon comment-btn" onClick={togglepostBar} />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <FaShare className="icon share-btn" />
            </motion.div>
          </div>

          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Bookmark saved={item.saved} postid={item._id} />
          </motion.div>
        </div>

        <motion.div
          className="like-count"
          animate={{
            scale: [1, 1.2, 1],
            color: postState.liked ? ["#000", "#ff0000", "#000"] : "#000",
          }}
          transition={{ duration: 0.5 }}
        >
          {postState.likecount} likes
        </motion.div>

        <div className="post-description">
          <span className="username">{userid?.username}</span>
          <span className="post-desc">
            {description?.substring(0, postState.isReadMore ? 600 : 100)}
          </span>
          <motion.span
            className="more-less"
            onClick={toggleReadMore}
            whileHover={{ color: "#007bff" }}
          >
            {description?.split(" ").length > 9
              ? postState.isReadMore
                ? "...less"
                : "...more"
              : null}
          </motion.span>
        </div>

        <motion.span
          className="view-comments"
          onClick={toggleComment}
          whileHover={{ color: "#007bff" }}
        >
          {postState.isComment ? "close all comments" : "view all comments"}
        </motion.span>

        <AnimatePresence>
          {postState.isComment && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Commentlst
                loadComment={loadComment.current}
                postID={item._id}
                toggleCommentload={stopCommentload}
              />
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {postState.isPost && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <PostComment
                startCommentload={startCommentload}
                postId={item._id}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </Wrapper>
  );
});

export default PostBox;
