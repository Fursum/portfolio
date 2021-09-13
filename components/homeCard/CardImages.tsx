import Image from "next/image";
import styles from "./card.module.css"
import { FunctionComponent } from "react";

type Props = {
    id:number
}

const CardImage:FunctionComponent<Props> = ({id}) =>{

    return images[id]

}

export default CardImage;

const cardDimensions = {
  width : 366,
  height : 206
}

const images = [
  <Image
    key={1}
    src={"/svg/Minimalist App White.svg"}
    className={styles.image}
    //width={cardDimensions.width}
    //height={cardDimensions.height}
    layout={"fill"}
  />,
  <Image
    key={2}
    src={"/svg/Minimalist Blog Black.svg"}
    className={styles.image}
    //width={cardDimensions.width}
    //height={cardDimensions.height}
    layout={"fill"}
  />,
  <Image
    key={3}
    src={"/svg/Minimalist Commerce White.svg"}
    className={styles.image}
    //width={cardDimensions.width}
    //height={cardDimensions.height}
    layout={"fill"}
  />,
]; 

