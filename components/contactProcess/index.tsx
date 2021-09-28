import {FunctionComponent } from "react";
import { useRouter } from "next/dist/client/router";

import ProcessCard from "./component";
import Localization from "../../localization";

import styles from "./component/process.module.css"

const ContactProcess:FunctionComponent = () =>{

    const router = useRouter();
    const lang = router.locale;
    const text = Localization("contact", lang);

    return (
      <div className={styles.processWrapper}>
        <ProcessCard svg={"Mail"}>
          <h1>{text.cards[0].title}</h1>
          <p>{text.cards[0].content}</p>
        </ProcessCard>
        <ProcessCard svg={"Palette"}>
          <h1>{text.cards[1].title}</h1>
          <p>{text.cards[1].content}</p>
        </ProcessCard>
        <ProcessCard svg={"Gear"}>
          <h1>{text.cards[2].title}</h1>
          <p>{text.cards[2].content}</p>
        </ProcessCard>
        <ProcessCard svg={"Earth"}>
          <h1>{text.cards[3].title}</h1>
          <p>{text.cards[3].content}</p>
        </ProcessCard>
      </div>
    );

}

export default ContactProcess;