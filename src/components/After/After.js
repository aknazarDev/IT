import React from 'react';
import Brilliant from "./Brilliant";
import Front from "./Front";
import Process from "./Process";
import Program from "./Program";
import So from "./So";


const After = () => {
    return (
        <>
            <section id="after">
                <div className="container">
                    <div className="after--general">
                       <h1>Главная / Наши курсы / <span>Frontend- разработчик</span></h1>
                        <div className='after--general__such'>
                            <div className='after--general__such--so'>
                                <h1>Frontend-разработчик</h1>
                                <p>Идея реактивного программирования появилась сравнительно недавно,
                                    лет 10 назад. Что вызвало популярность этого относительно нового
                                    подхода и почему сейчас он в тренде, рассказал на конференции </p>
                                <button className='after--general__such--so__btn'>Купить курс за 46 $ </button>
                            </div>
                            <div className='after--general__such--no'>
                                    <h1>В курс входит:
                                        3 модулей 60материалов</h1>
                                    <h2>Доступ:
                                        Навсегда</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Brilliant/>
            <Front/>
            <Process/>
            <Program/>
            <So/>
        </>
    );
};

export default After;