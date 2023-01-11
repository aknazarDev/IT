import React from 'react';
import {BsArrowRight} from "react-icons/bs";

const Team = () => {
    return (
        <>
            <section id="team">
                <div className='container'>
                    <div className="team--general">
                        <div className="team--general__item">
                            <h2>Курсы</h2>
                        </div>
                        <div className='team--general__blocks'>
                            <div className="team--general__title">
                                <h3>Frontend-разработчик</h3>
                                <p>Мастер создания сайтов. Умеет <br/>делать их красивыми, <br/> интерактивными, с
                                    большим <br/>
                                    функционалом. Профессия отлично <br/>подойдет тем, кто хочет фрилансить <br/>и
                                    постоянно
                                    разрабатывать новые <br/>проекты</p>
                                <div className='team--general__title--enter'>
                                    <h5>Подробнее</h5>
                                    <BsArrowRight/>
                                </div>
                            </div>
                            <div className="team--general__title">
                                <h3>Backend-разработчик</h3>
                                <p>Специалист, который отвечает за <br/>построение логики для воплощения <br/>любой
                                    идеи. Он
                                    собирает фундамент <br/>и опорную систему для проекта - от <br/>простого сайта для
                                    магазина
                                    одежды <br/>до сложных вычислительных систем <br/>нейронных сетей.</p>
                                <div className='team--general__title--enter'>
                                    <h5>Подробнее</h5>
                                    <BsArrowRight/>
                                </div>
                            </div>
                            <div className="team--general__title">
                                <h3>UX / UI Дизайнер</h3>
                                <p>Креативный специалист, который <br/>придумывает дизайн и интерфейс <br/>продукта. Специалист
                                    UX/UI отвечает <br/>за подбор форм, цветов, <br/>Функциональности дизайна и прочих <br/>важных
                                    параметров для комфорьного <br/>использования продукта.</p>
                                <div className='team--general__title--enter'>
                                    <h5>Подробнее</h5>
                                    <BsArrowRight/>
                                </div>
                            </div>
                        </div>
                        <div className='team--general__btn'>
                            <button>Все курсы</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Team;