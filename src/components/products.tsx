import Link from "next/link";
import React, { useState } from "react";
import styles from "../../styles/Home.module.css";
import { products } from "../utils/product";
import Image from "next/image";
import { motion } from "framer-motion";

const Products = () => {
  const [productDetail, setProductDetail] = useState("");

  const productToShow = products.find(
    (product) => product.name === productDetail
  );

  const showProductDetail = (productName: string) => {
    setProductDetail(productName);
  };

  return (
    <>
      {productDetail === "" ? (
        <div>
          <div>
            {" "}
            <span>{productToShow?.images}</span>
            <h1>Select a products</h1>
          </div>

          <motion.div className={styles.productWrap}>
            {products.map((product, index) => (
              // eslint-disable-next-line @next/next/link-passhref
              <Link key={index} href={""}>
                <div
                  className={styles.card}
                  onClick={() => showProductDetail(product.name)}
                >
                  <div className={styles.productInfo}>
                    <Image
                      key={index}
                      src={product.images}
                      alt={"product" + (index + 1)}
                      width={550}
                      height={350}
                    />
                    <div className={styles.productDetails}>
                      <span>{product.name}</span>
                      <span>{product.price}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </motion.div>
        </div>
      ) : (
        <div className={styles.showProduct}>
          <h2 className="">{productToShow?.price}</h2>
          <span>{productToShow?.desc}</span>
        </div>
      )}
    </>
  );
};

export default Products;
