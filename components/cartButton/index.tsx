import { FunctionComponent, useState } from "react";
import { Cart } from "@public/svg-component";
import styles from "./cartButton.module.css";

const CartButton: FunctionComponent = () => {
    const [state, setState] = useState(0);

    const className: string = state % 2 ? styles.active : styles.inactive;

    return (
        <div className={styles.tempContainer}>
            <div
                className={`${styles.outerButton} ${className}`}
                onClick={() => {
                    setState(state + 1);
                }}
            >
                <span className={styles.cartCount}>{state}</span>
                <Cart />
                <span className={styles.cartName}>Cart</span>
            </div>
        </div>
    );
};

export default CartButton;
