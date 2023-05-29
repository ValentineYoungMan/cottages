import React from 'react';
import s from './../../Profile.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGZGbRNgG_g82yO7ammcXwvtEUDz-0fFxM5_aUUkJoCWT9Q5VBR3cTO9QsPJ4VW1nT0ZM&usqp=CAU" alt="" />
                {props.message}
            <div>
                <span>like {props.likesCount}</span>
            </div>
        </div>
    )
}

export default Post;