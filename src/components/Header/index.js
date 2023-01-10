import React from 'react';
import logo from '../../asstets/img/logo.svg'
import {Link} from "react-router-dom";


const Header = () => {
    return (
        <>
            <div id="header">
                <div className="container">
                    <div className="header--general">
                        <div className='header--general__link'>
                            <Link to='/'>
                                <img src={logo} alt=""/>
                            </Link>
                            <nav className='header--general__link--nav'>
                                <Link className='header--general__link--nav__block' to='/school'>О школе</Link>
                                <Link className='header--general__link--nav__block' to='/course'>Наши курсы</Link>
                                <Link className='header--general__link--nav__block' to='/about'>О нас</Link>
                            </nav>
                        </div>
                        <div className='header--general__subs'>
                            <a className='header--general__subs--bot' href="#">Войти</a>
                            <button>Подписаться</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;