import { FunctionComponent, useState } from "react";
import styles from "./comingsoon.module.css"

const ComingSoon:FunctionComponent = () => {

    const [disabled, setDisabled] = useState(false);

    const style = disabled ? "" : styles.modal;

    return <div className={style} onClick={() => {setDisabled(true);}}/>

}

export default ComingSoon