import type { NextPage } from "next";
import { Fragment } from "react";

import Header from "../components/header";
import Card from "../components/homeCard";

import styles from "../components/homeCard/card.module.css";

const Home: NextPage = () => {
  return (
    <Fragment>
      <Header />
      <div className={styles.content}>
        <Card id={0} link={""}>
          <h2>Enhance your app with style</h2>
          <h5>Bring some fun to your work with warm colors and cool layouts</h5>
        </Card>
        <Card id={1} link={""}>
          <h2>Express yourself better</h2>
          <h5>Bring more depth to your blog with your tastes</h5>
        </Card>
        <Card id={2} link={""}>
          <h2>Impress your customers</h2>
          <h5>Polish your storefront with modern and suitable designs</h5>
        </Card>
      </div>
    </Fragment>
  );
};

export default Home;
