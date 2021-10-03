import { FunctionComponent } from "react";
import styles from "./contactArrow.module.css";
import { Arrow } from "@public/svg-component";
import Localization from "@localization";
import { useRouter } from "next/router";


const ContactArrow:FunctionComponent = () => {

    const router = useRouter();
    const lang = router.locale;
    const text = Localization("contact", lang);

    return(
        <div className={styles.outer}>
            <Arrow/>
            <h1>{text.process}</h1>
        </div>
    )

}

export default ContactArrow;