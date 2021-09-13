import { FunctionComponent, useState } from "react";
import styles from "./contact.module.css";
import { Discord, MailBlack, GitHub, Loading } from "../../public/svg-component";
import Link from "next/link";

/**
 * This component is used in /contact page.
 * It lists all the contact options
 */

const Contact: FunctionComponent = () => {
  const [copiedState, setCopiedState] = useState(false);
  const [loadingState, setLoadingState] = useState(false);

  const discord = "Fursum#9816";
  const github = "https://github.com/Fursum";

  function copyDiscord() {
    navigator.clipboard.writeText(discord);
    setCopiedState(true);
    setTimeout(() => {
      setCopiedState(false);
    }, 5000);
  }

  function showLoading(){
    setLoadingState(true);
    setTimeout(() => {
      setLoadingState(false);
    }, 5000);
  }

  return (
    <div className={styles.outerContact}>
      <div className={styles.contactButton} onClick={copyDiscord}>
        <Discord />
        <h2>{discord}</h2>
        {
          //Copy popup
          !copiedState ? (
            ""
          ) : (
            <div className={styles.copyNotification}>Copied to clipboard!</div>
          )
        }
      </div>
      <Link href={"mailto:fursum0@gmail.com"}>
        <div className={styles.contactButton}>
          <MailBlack />
          <h2>fursum0@gmail.com</h2>
        </div>
      </Link>
      <Link href={github}>
        <div className={styles.contactButton} onClick={showLoading}>
          <GitHub />
          <h2>Fursum</h2>
          {!loadingState ? (
            ""
          ) : (
            <div className={styles.loadingWrapper}>
              <Loading />
            </div>
          )}
        </div>
      </Link>
    </div>
  );
};


export default Contact;
