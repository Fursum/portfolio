import { FunctionComponent } from "react";
import styles from "./contactArrow.module.css";
import { Arrow } from "../../public/svg-component";
import Text from "../../localization/contact";
import { useRouter } from "next/dist/client/router";


const ContactArrow:FunctionComponent = () => {

    const router = useRouter();
    const lang = router.locale;

    return(
        <div className={styles.outer}>
            <Arrow/>
            <h1>{Text(lang).process}</h1>
        </div>
    )

}

export default ContactArrow;