import { FunctionComponent } from "react";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import styles from "./languageSelect.module.css";

const LanguageSelect:FunctionComponent = () => {

    const router = useRouter();

    return (
      <div className={styles.outer}>
        <Link href={router.asPath} locale={"tr"}>
          TR
        </Link>
        <Link href={router.asPath} locale={"en"}>
          EN
        </Link>
      </div>
    );
}

export default LanguageSelect;