import React from 'react';
import s from './Service.module.css';

const Service = (props) => {
    return   (
                <div className={s.services__item}>
                    <div className={s.service__img}>
                        <img src={props.image} />
                    </div>
                    <div className={s.service__info}>
                        <div className={s.service__title}>{props.title}</div>
                        <div className={s.service__text}>{props.text}</div>
                    </div>
                </div>   
               
           
)}

export default Service;