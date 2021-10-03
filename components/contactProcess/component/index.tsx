import styles from "./process.module.css";
import { FunctionComponent } from "react";
import {
  MailParagraph,
  Gear,
  Palette,
  Earth,
} from "@public/svg-component";

type svgOption = "Earth" | "Palette" | "Gear" | "Mail";

interface Props {
  svg: svgOption;
}

const ProcessCard: FunctionComponent<Props> = ({ children, svg }) => {
  return (
    <div className={styles.outerCard}>
      <div className={styles.textSide}>{children}</div>
      <div className={styles.imageSide}>{getSvg(svg)}</div>
    </div>
  );
};

const getSvg = (svg: svgOption) => {
  switch (svg) {
    case "Earth":
      return <Earth />;
    case "Gear":
      return <Gear />;
    case "Mail":
      return <MailParagraph />;
    case "Palette":
      return <Palette />;
  }
};

export default ProcessCard;
