import Link from "next/link";
import React, { useState } from "react";
import styles from "../../styles/Home.module.css";
import { products } from "../utils/product";
import Image from "next/image";
import { motion } from "framer-motion";

const Products = () => {
  const { projectDetail, setProjectDetail } = useState("")
  return (
    <>
      <div>
        <h1>Select a products</h1>
      </div>
      <motion.div  
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}>
        {products.map((product, index) => (
          // eslint-disable-next-line @next/next/link-passhref
          <Link key={index} href={""}>
            <div className={styles.card} onClick={projectDetail}>
              {/* <span className='drugs'>Pharmaceutical product</span> */}

              <div className={styles.productInfo}>
                
                <Image
                  // key={index}
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
    </>
  );
};

export default Products;
