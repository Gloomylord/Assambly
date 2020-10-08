import React, {useMemo} from 'react';
import styles from './style.module.css';
import cn from 'classnames';
import Tilt from 'react-tilt';
import {Link} from "react-router-dom";

const gradArr = [ '#f04fa1, #ff5c5f','#f8e189, #f18481','#ea31c2, #6390e9','#55c685, #255286'];

function Card({link = '#',imgUrl, title,imgPos = 'center'}) {
    let gradMemo = useMemo(()=>{
        return `linear-gradient(-5deg,${gradArr[Math.round(Math.random() * gradArr.length - .5)]})`;
    },[]);
    return <Tilt className={cn(styles.main)} options={{
        max: 25,
        perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
        scale: 1.1,      // 2 = 200%, 1.5 = 150%, etc..
        speed: 1000,    // Speed of the enter/exit transition
        reset: true,    // If the tilt effect has to be reset on exit.
        easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    }}>
        <Link to={link}>
        <div className={styles.img}
             style={{
                 '--url': `url(${imgUrl})`,
                 '--pos': imgPos,
             }}>
            <section className={styles.titleContainer}>
                <div style={{background: gradMemo}}/>
                <div style={{background: gradMemo}}/>
                <h3 className={styles.title}>{title}</h3>
            </section>
        </div>
        </Link>
    </Tilt>
}

export default Card;