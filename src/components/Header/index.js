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
                        <div className="header--general__burger">
                            <input type="checkbox" id="menu-toggle" className="burger-input"/>
                            <label htmlFor="menu-toggle" className="burger-label"></label>
                            <ul className="burger-menu">
                                <li>            <NavLink className="nav-header" target="_blank" to={"/School"}>О школе</NavLink>
                                </li>        <li>
                                <NavLink className="nav-header" target="_blank" to={"/Course"}>Наши курсы</NavLink>        </li>
                                <li>            <NavLink className="nav-header" target="_blank" to={"/About"}>О нас</NavLink>
                                </li>        <li className="burger-menu_group">
                                <NavLink className="nav-right" to={"/Sign"}>Войти</NavLink>            <NavLink to={"/Follow"} className="button-header">Подписаться</NavLink>
                            </li>    </ul>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Header;