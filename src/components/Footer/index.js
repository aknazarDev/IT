import React from 'react';
import logo from '../../asstets/img/logo.svg'
import {AiOutlineInstagram} from "react-icons/ai";
import {FiYoutube} from "react-icons/fi";
import {CiFacebook, CiTwitter} from "react-icons/ci";
import {TbBrandTelegram, TbBrandTiktok} from "react-icons/tb";
import {TfiEmail} from "react-icons/tfi";
import {BsTelephone} from "react-icons/bs";
import {BiMap} from "react-icons/bi";
import {Link} from "react-router-dom";

const Footer = () => {
    window.scroll(0,0)
    return (
        <>
            <footer id="footer">
                <div className="container">
                    <div className="footer--general">
                        <div className="footer--general__title">
                            <Link to='/home'>
                                <img src={logo} alt=""/>
                            </Link>
                            <div className='footer--general__title--block'>
                                <div className='footer--general__title--block__language'>
                                    <h1>KG</h1>
                                </div>
                                <div className='footer--general__title--block__language'>
                                    <h1>RU</h1>
                                </div>
                            </div>

                        </div>
                        <div className="footer--general__link">
                            <h1>Быстрые ссылки</h1>
                            <Link to={'/school'}>
                                <p>О школе</p>
                            </Link>
                            <Link to={'/course'}>
                                <p>Наши курсы</p>
                            </Link>
                            <Link to={'/about'}>
                                <p>О нас</p>
                            </Link>
                        </div>
                        <div className="footer--general__media">
                            <h1>Социальные сети</h1>
                            <div className='footer--general__media--icons'>
                                <a href="https://www.instagram.com/motion_web/"><AiOutlineInstagram className='footer--general__media--icons__icon'/></a>
                                <a href="https://www.youtube.com/@motionwebllc683"><FiYoutube className='footer--general__media--icons__icon'/></a>
                                <a href="#"><CiFacebook className='footer--general__media--icons__icon'/></a>
                            </div>
                            <div className='footer--general__media--icons'>
                                <CiTwitter className='footer--general__media--icons__icon'/>
                                <TbBrandTiktok className='footer--general__media--icons__icon'/>
                                <TbBrandTelegram className='footer--general__media--icons__icon'/>
                            </div>
                        </div>
                        <div className="footer--general__contacts">
                            <h1>Контакты</h1>
                            <div className='footer--general__contacts--contact'>
                                <TfiEmail/>
                                <a href="https://www.instagram.com/motion_web/"><h2>@motionwebteam@gmail.com</h2></a>
                            </div>
                            <div className='footer--general__contacts--contact'>
                                <BsTelephone/>
                                <a href="tel: +996"><h2>+996 559 - 69 - 26 - 26</h2></a>
                            </div>
                        </div>
                        <div className="footer--general__addresses">
                            <h1>Адреса</h1>
                            <div className='footer--general__addresses--address'>
                                <BiMap/>
                                <h2>Турусбекова 109 / 3</h2>
                            </div>
                            <h2>Идентификационный
                                <br /> код: 1234567890</h2>
                        </div>

                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;