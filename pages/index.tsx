import type { NextPage } from "next";
import { useRouter } from "next/dist/client/router";

import Card from "@components/homeCard";
import Localization from "@localization";

import styles from "@components/homeCard/card.module.css";

const Home: NextPage = () => {

  const router = useRouter();
  const lang = router.locale;
  const text = Localization("home", lang);

  return (
    <>
      <div className={styles.content}>
        <Card id={0} link={"https://okey-sayaci.vercel.app/"}>
          <h2>{text.cards[0].title}</h2>
          <h5>{text.cards[0].content}</h5>
        </Card>
        <Card id={1} link={"/"}>
          <h2>{text.cards[1].title}</h2>
          <h5>{text.cards[1].content}</h5>
        </Card>
        <Card id={2} link={"/"}>
          <h2>{text.cards[2].title}</h2>
          <h5>{text.cards[2].content}</h5>
        </Card>
      </div>
    </>
  );
};

export default Home;
