import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './../Dialogs.module.css';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialogItem} >
            <NavLink  to='#'/*{path}*/ className={s.dialog + ' ' + s.active}>{props.name}</NavLink>
        </div>)
}

export default DialogItem;