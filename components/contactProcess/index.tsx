import {FunctionComponent } from "react";
import ProcessCard from "./component";
import styles from "./component/process.module.css"
import Text from "../../localization/contact";
import { useRouter } from "next/dist/client/router";

const ContactProcess:FunctionComponent = () =>{

    const router = useRouter();
    const lang = router.locale;

    return (
      <div className={styles.processWrapper}>
        <ProcessCard svg={"Mail"}>
          <h1>{Text(lang).cards[0].title}</h1>
          <p>{Text(lang).cards[0].content}</p>
        </ProcessCard>
        <ProcessCard svg={"Palette"}>
          <h1>{Text(lang).cards[1].title}</h1>
          <p>{Text(lang).cards[1].content}</p>
        </ProcessCard>
        <ProcessCard svg={"Gear"}>
          <h1>{Text(lang).cards[2].title}</h1>
          <p>{Text(lang).cards[2].content}</p>
        </ProcessCard>
        <ProcessCard svg={"Earth"}>
          <h1>{Text(lang).cards[3].title}</h1>
          <p>{Text(lang).cards[3].content}</p>
        </ProcessCard>
      </div>
    );

}

export default ContactProcess;