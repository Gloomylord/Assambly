import React from "react";
import style from './pencil.module.css';

function Pencil({className}) {
    return <div className={style.container}>
        <div className={style.base}>
            <div className={style.lead}/>
            <div className={style.lasik}/>
            <div className={style.iron}>
                <div/>
                <div/>
            </div>
        </div>
    </div>
}

export default Pencil;