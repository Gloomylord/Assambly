import React from "react";
import styles from './text.module.css'

function TitleLaser() {
    return (
        <h1 className={styles.title}>
            {'Use laser to change text color'.split('').map((value, i) =>
                <span key={i}
                      className={'letter'}>{value}</span>)}
        </h1>
    )
}

export default TitleLaser;
