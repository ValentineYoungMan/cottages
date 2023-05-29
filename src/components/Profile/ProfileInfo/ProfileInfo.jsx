import React from 'react';
import s from './../Profile.module.css';

const ProfileInfo = () => {
    return (
        <div className={s.profileInfo__container}>
            <div className={s.profileInfo__img__container}>
                <img src='https://www.sentosa.com.sg/-/media/sentosa/beach-reservations/tanjongbeach_activity.jpg?revision=8a9f51dc-3f19-42ed-9ce3-86774a888bcf' />
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div> 
       )
}

export default ProfileInfo;