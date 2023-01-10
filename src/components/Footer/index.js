import React from 'react';
import logo from '../../asstets/img/logo.svg'
import {AiOutlineInstagram} from "react-icons/ai";
import {FiYoutube} from "react-icons/fi";
import {CiFacebook, CiTwitter} from "react-icons/ci";
import {TbBrandTelegram, TbBrandTiktok} from "react-icons/tb";
import {TfiEmail} from "react-icons/tfi";
import {BsTelephone} from "react-icons/bs";
import {BiMap} from "react-icons/bi";

const Footer = () => {
    return (
        <>
            <footer id="footer">
                <div className="container">
                    <div className="footer--general">
                        <div className="footer--general__title">
                            <img src={logo} alt="img"/>
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
                            <p>О школе</p>
                            <p>Наши курсы</p>
                            <p>О нас</p>
                        </div>
                        <div className="footer--general__media">
                            <h1>Социальные сети</h1>
                            <div className='footer--general__media--icons'>
                                <AiOutlineInstagram className='footer--general__media--icons__icon'/>
                                <FiYoutube className='footer--general__media--icons__icon'/>
                                <CiFacebook className='footer--general__media--icons__icon'/>
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
                                <h2>@motionwebteam@gmail.com</h2>
                            </div>
                            <div className='footer--general__contacts--contact'>
                                <BsTelephone/>
                                <h2>+996 559 - 69 - 26 - 26</h2>
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