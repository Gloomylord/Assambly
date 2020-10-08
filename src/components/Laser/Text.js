import React from "react";
import styles from './text.module.css';
import obj from './lorem';

function TextLaser() {
    return (
        <p className={styles.text}>
            {obj.text.split('').map((value, i) =>
                <span key={i}
                      className='letter'>{value}</span>)}
        </p>
    )
}

export default TextLaser;