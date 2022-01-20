import React, { useState } from "react";
import styles from "../../styles/Home.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import  { Images}  from "../utils/ImageData";

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const ImageSlides = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const swipeThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };
  const imageIndex = wrap(0, Images.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };
  return (
    <>
      <div className={styles.slideWrap}>
        <h1 className={styles.slideTitle}>Product slides</h1>
        <AnimatePresence initial={false} custom={direction} >
          <motion.img
          className={styles.ImgSlides}
            key={page}
            src={Images[imageIndex]}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeThreshold) {
                paginate(1);
              } else if (swipe > swipeThreshold) {
                paginate(-1);
              }
            }}
          />
        </AnimatePresence>
        <div className={styles.next} onClick={() => paginate(1)}>
          {"‣"}
        </div>
        <div className={styles.prev} onClick={() => paginate(-1)}>
          {"‣"}
        </div>
      </div>
    </>
  );
};

export default ImageSlides;
