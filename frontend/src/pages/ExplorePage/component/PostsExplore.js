import React, { useRef, useState, useEffect } from "react";
import Wrapper from "../wrapper/postsExplore";
import { useAppContext } from "../../../context/appContext";
import Postbox from "./Postbox";
import Postmodel from "./Postmodel";
import SearchBar from "./SearchBar";
import { motion } from "framer-motion";

const PostsExplore = () => {
  const options = {
    isModel: false,
    slideIndex: 0,
  };

  const { explorePage, explorelst, isLoading } = useAppContext();
  const fetchpost = useRef(true);
  const [option, setOptions] = useState(options);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const openSlide = (number) => {
    setOptions({ isModel: true, slideIndex: number });
  };

  const closeslide = () => {
    setOptions({ ...option, isModel: false });
  };

  useEffect(() => {
    if (fetchpost.current === true) {
      explorePage();
    }
    return () => (fetchpost.current = false);
  }, [explorePage]);

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  // Animation variants for posts
  const postVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <Wrapper>
      <SearchBar />

      <div className="posts">
        {explorelst.map((item, index) => {
          const { postfile, filetype } = item;
          const isHovered = hoveredIndex === index;

          return (
            <motion.div
              key={item._id}
              className={`post ${isHovered ? "hovered" : ""}`}
              variants={postVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              custom={index}
              onClick={() => openSlide(index)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Postbox
                postfile={postfile}
                filetype={filetype}
                index={index}
                isHovered={isHovered}
              />

              {isHovered && (
                <motion.div
                  className="post-overlay"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="view-post">View Post</span>
                </motion.div>
              )}
            </motion.div>
          );
        })}

        <div className={option.isModel ? "model-container" : "d-none"}>
          <Postmodel
            slideIndex={option.slideIndex}
            explorelst={explorelst}
            closeslide={closeslide}
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default PostsExplore;
