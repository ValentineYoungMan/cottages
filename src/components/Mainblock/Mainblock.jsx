import React from 'react';
import s from './Mainblock.module.css';

const Mainblock = () => {
    return   (
        <div className={s.mainblock}>
            <div className={s.mainblock__container}>
                <div className={s.mainblock__title}>ZEN Cottages</div>
                <div className={s.mainblock__text}>We can build your dream home.</div>
                <button href='#' className={s.mainblock__button}>Request a call</button>
            </div>
        </div>
)}

export default Mainblock;