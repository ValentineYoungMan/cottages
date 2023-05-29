import React from 'react';
import logo from './../../assets/img/logo1.svg';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return   (
        <header className={s.header}>
            <div className={s.header__container}>
                <div className={s.header__logo}>
                    <img className={s.header__logo__img} src={logo} />
                </div>
                <nav className={s.header__nav}>
                    <ul className={s.header__ul}>
                        <li className={s.header__li}>
                            <NavLink to="/mainblock" className={navData => navData.isActive ? `${s.activeLink} ${s.header__li__a}` : s.header__li__a}>Main</NavLink>
                        </li>
                        <li className={s.header__li}>
                            <NavLink to="/services" className={navData => navData.isActive ? `${s.activeLink} ${s.header__li__a}` : s.header__li__a}>Services</NavLink>
                        </li>
                        <li className={s.header__li}>
                            <NavLink to="/dialogs" className={navData => navData.isActive ? `${s.activeLink} ${s.header__li__a}` : s.header__li__a}>Dialogs</NavLink>
                        </li>
                        <li className={s.header__li}>
                            <NavLink to="/profile" className={navData => navData.isActive ? `${s.activeLink} ${s.header__li__a}` : s.header__li__a}>Profile</NavLink>
                        </li>
                    </ul>
                </nav>
                <div className={s.header__call}>
                    <span>CALL US </span>
                    <a href="#">+1 (234) 567 89 00</a>
                </div>
            </div>
        </header>
)}

export default Header;