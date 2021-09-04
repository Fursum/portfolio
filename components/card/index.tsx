import { FunctionComponent } from "react";
import CardImage from "./CardImages";
import styles from "./card.module.css";


type Props = {
  id: number;
  link: string;
};

const Card: FunctionComponent<Props> = ({id, link, children }) => {
  return (
    <div className={styles.outerCard}>
      <div className={styles.innerCard}>
        <div className={styles.textSide}>{children}</div>
        <div className={styles.imageSide}>
          <div className={styles.svgContainer}>
            <CardImage id={id} />
          </div>
          <div className={styles.buttonContainer}>
            <a href={link}>VISIT</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
