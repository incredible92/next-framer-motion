import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Products from "../src/components/products";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <div className={styles.container}>
      <Products />
      </div>
    
    </>
  );
};

export default Home;
