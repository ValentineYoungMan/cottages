import React from 'react';
import s from './Services.module.css';
import n20 from './../../assets/img/20.svg';
import Service from './Service/Service';


const Services = (props) => {

    let state = props.store.getState().servicesPage;

    let servicesElements = state.services.map(item => <Service id={item.id} title={item.title} text={item.text} image={item.image} />)

    return   (
        <div className={s.services}>    
            <div className={s.services__top}>
                <div className={s.services__container}>
                    <div className={s.services__top__left}>
                        <img className={s.services__top__img} src={n20} />
                        <div className={s.services__img__text}>years of professional experience</div>
                    </div>
                    <div className={s.services__top__right}>
                        <p className={s.services__top__text}>ZEN Cottages were founded by architect Andrew Shimmer and his wife Carol. They wanted to create classically-designed, efficient, and prefabricated structures that could be easily moved, contracted, expanded, and sold while maintaining both integrity and aesthetics.</p>
                        <p className={s.services__top__text}>The company respects the natural environment and deeply cares about it. Therefore, we do our best to use building constructions and delivery systems that are flexible and have minimal impact on the land they occupy.</p>
                    </div>
                </div>
            </div>
            <div className={s.services__items}>
                {servicesElements}
            </div>    
           
        </div>
)}

export default Services;