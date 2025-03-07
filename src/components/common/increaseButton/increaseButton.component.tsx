import { useState } from "react";
import styles from './increaseButton.module.scss';

function IncreaseButton(){
    const [count, setCount] = useState(1)
    return(
        <div className={styles.qtdBtn}>
            <button
            className={styles.qtdFunc}
            onClick={() => setCount((prev) => Math.max(prev - 1, 0))}
            >
            -
            </button>
            <span className={styles.value}>{count}</span>
            <button
            className={styles.qtdFunc}
            onClick={() => setCount((prev) => prev + 1)}
            >
            +
            </button>
        </div>
    )
}

export default IncreaseButton;