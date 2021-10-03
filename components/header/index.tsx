import { useRouter } from "next/router";
import { FunctionComponent } from "react";
import styles from "./header.module.css";
import { MailWhite } from "@public/svg-component";
import Link from "next/link";

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
    <header className={styles.header}>
      <div className={styles.logo} onClick={scrollToTop}>
        <Link href={"/"}>Fursum</Link>
      </div>
      <button onClick={contactButtonClick} className={styles.contactButton}>
        <MailWhite />
      </button>
    </header>
  );
};

export default Header;
