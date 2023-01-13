import React from 'react';
import logo from '../../asstets/img/logo.svg'
import {Link, NavLink} from "react-router-dom";


const Header = () => {
    return (
        <>
            <div id="header">
                <div className="container">
                    <div className="header--general">
                        <div className='header--general__link'>
                            <Link to='/home'>
                                <img src={logo} alt=""/>
                            </Link>
                            <nav className='header--general__link--nav'>
                                <NavLink className='header--general__link--nav__block' to={'/school'}>О школе</NavLink>
                                <NavLink className='header--general__link--nav__block' to={'/course'}>Наши курсы</NavLink>
                                <NavLink className='header--general__link--nav__block' to={'/about'}>О нас</NavLink>
                            </nav>
                        </div>
                        <div className='header--general__subs'>
                            <Link className='header--general__subs--bot' to={'/checking'}>Войти</Link>
                            <Link to={'/package'}>
                                <button>Подписаться</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;