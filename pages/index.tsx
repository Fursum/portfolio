import type { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import { Fragment } from "react";
import Card from "../components/homeCard";
import styles from "../components/homeCard/card.module.css";
import Text from "../localization/home";

const Home: NextPage = () => {

  const router = useRouter();
  const lang = router.locale;

  return (
    <Fragment>
      <div className={styles.content}>
        <Card id={0} link={"https://okey-sayaci.vercel.app/"}>
          <h2>{Text(lang).cards[0].title}</h2>
          <h5>{Text(lang).cards[0].content}</h5>
        </Card>
        <Card id={1} link={"/"}>
          <h2>{Text(lang).cards[1].title}</h2>
          <h5>{Text(lang).cards[1].content}</h5>
        </Card>
        <Card id={2} link={"/"}>
          <h2>{Text(lang).cards[2].title}</h2>
          <h5>{Text(lang).cards[2].content}</h5>
        </Card>
      </div>
    </Fragment>
  );
};

export default Home;
