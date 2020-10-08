import React from "react";
import style from './style.module.css';
import Pencil from "./Pencil";

function PencilLoader() {
    return <div className={style.container}>
        <div className={style.pencilContainer}>
            <Pencil/>
        </div>
        <div className={style.progress}/>
    </div>
}

export default PencilLoader;