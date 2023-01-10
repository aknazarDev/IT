import React from 'react';
import abroad from '../../asstets/img/artboard.png'

const School = () => {
    return (
        <>
            <section id="school">
                <div className="container">
                    <div className="school--general">
                        <div className="school--general__item">
                            <h4>Главная / </h4>
                            <h4>О школе</h4>
                        </div>
                        <div className="school--general__title">
                            <div className="school--general__title--block">
                                <h1>О нашей школе:</h1>
                                <p>Наша платформа — это интенсивная программа
                                    <br/> обучения для тех, кто хочет освоить востребованную
                                    <br/> профессию, войти в IT и зарабатывать больше.</p>
                                <h1>Наша миссия:</h1>
                                <p>Сформировать интерес к современным технологиям
                                    <br /> и помочь школьнику определиться с выбором
                                    <br /> будущей специальности.</p>
                            </div>
                            <img src={abroad} alt="img"/>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default School;