import { useRouter } from "next/dist/client/router";
import Image from "next/image";
import { FunctionComponent } from "react";
import styles from "./header.module.css";

const Header: FunctionComponent = () => {
  const router = useRouter();

  const contactButtonClick = () => {
    router.push("/contact");
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.header}>
      <div className={styles.logo} onClick={scrollToTop}>
        Fursum
      </div>
      <button onClick={contactButtonClick} className={styles.contactButton}>
        <img src={"/svg/Mail - Thick Rounded.svg"} />
      </button>
    </div>
  );
};

export default Header;
