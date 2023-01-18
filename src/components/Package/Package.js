import React from 'react';
import {Link} from "react-router-dom";
import {AiOutlineCheck} from "react-icons/ai";
import Submit from "../Home/Submit";
import Questions from "../Home/Questions";

const Package = () => {
    window.scroll(0,0)
    return (
        <>
            <section id="package">
                <div className="container">
                    <div className="package--h1">
                        <Link to={'/home'}>
                            <h1>Главная / </h1>
                        </Link>
                        <Link to={'/package'}>
                            <h1 style={{
                                color:'white'
                            }}>Пакет участия</h1>
                        </Link>
                    </div>
                    <div className="package--general">
                        <div className="package--general__title">
                            <h1>Выберите свой пакет участия</h1>
                        </div>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}>
                            <div className="package--general__block">
                                <div className="package--general__block--title">
                                    <h2>Месяц +</h2>
                                    <h1>105,00 $</h1>
                                    <button>Ежемесячно</button>
                                    <p><AiOutlineCheck/> <b>Все статьи</b></p>
                                </div>
                                <button>Оформить подписку</button>
                            </div>
                            <div className="package--general__block">
                                <div className="package--general__block--title">
                                    <h2>Год</h2>
                                    <h1>220,00 $</h1>
                                    <button>Ежегодно</button>
                                    <p><AiOutlineCheck/> <b>Все статьи</b></p>
                                    <p><AiOutlineCheck/> <b>Все мастер классы</b></p>
                                </div>
                                <button>Оформить подписку</button>
                            </div>
                            <div className="package--general__blocks">
                                <div className="package--general__blocks--titles">
                                    <h2>Год +</h2>
                                    <h1>585,00 $</h1>
                                    <button>Ежегодно</button>
                                    <p><AiOutlineCheck/> <b>Все статьи</b></p>
                                    <p><AiOutlineCheck/> <b>Все мастер классы</b></p>
                                    <p><AiOutlineCheck/> <b>6 новых статей каждый месяц</b></p>
                                    <p><AiOutlineCheck/> <b>Доступ к курсу “DevOps - инженер”</b></p>
                                </div>
                                <button className='package--general__blocks--tops'>Оформить подписку</button>
                            </div>
                        </div>
                        <p className='package--general__p'>Списания будут автоматическими. Вы всегда можете отменить подписку в Вашем личном кабинете
                            и больше списаний не будет</p>
                    </div>
                </div>
            </section>
            <Submit/>
            <Questions/>

        </>
    );
};

export default Package;