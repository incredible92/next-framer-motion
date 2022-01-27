import type { NextPage } from "next";
import ImageSlides from "../src/components/ImageSlides";
import React, { useState } from "react";
import Products from "../src/components/products";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [productDetail, setProductDetail] = useState("");
  return (
    <>
      <div className={styles.container}>
        <Products  productDetail={productDetail} setProductDetail={setProductDetail} />
      </div>

      <div>
       { productDetail === "" && <ImageSlides /> }
      </div>
    </>
  );
};

export default Home;
