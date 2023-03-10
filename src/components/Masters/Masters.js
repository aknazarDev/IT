import React from 'react';
import {Link} from "react-router-dom";


const Masters = () => {
    window.scroll(0, 0)
    return (
        <>
            <div id="master" style={{
                padding: '150px 0px'
            }}>
                <div className="container">
                    <div className="master--general">
                        <div className="school--general__item" style={{
                            display: 'flex'
                        }}>
                            <Link to={'/home'}>
                                <h4 style={{
                                    color: '\n' +
                                        '#A5A5A5'
                                }}>Главная /</h4>
                            </Link>
                            <Link to={'/masters'}>
                                <h4 style={{color: 'white', paddingLeft: '5px'}}>Мастер классы</h4>
                            </Link>
                        </div>
                        <div className="master--general__item">
                            <h1>Мастер-классы</h1>
                        </div>
                        <div className="master--general__blocks">
                            <Link className='master--general__blocks--link' to={'/control'}>
                                <div className="master--general__blocks--block">
                                    <h5>Реактивное программирование на Java: как, зачем и стоит ли? </h5>
                                    <p>Программирования появилась сравнительно недавно, лет 10 назад. Что вызвало
                                        популярность этого <br/>относительно нового подхода и почему сейчас он в тренде,
                                        рассказал на конференции РИТ++ ...</p>
                                </div>
                            </Link>

                            <div className="master--general__blocks--block">
                                <h5>Реактивное программирование на Java: как, зачем и стоит ли? </h5>
                                <p>Программирования появилась сравнительно недавно, лет 10 назад. Что вызвало
                                    популярность этого <br/>относительно нового подхода и почему сейчас он в тренде,
                                    рассказал на конференции РИТ++ ...</p>
                            </div>
                            <div className="master--general__blocks--block">
                                <h5>Реактивное программирование на Java: как, зачем и стоит ли? </h5>
                                <p>Программирования появилась сравнительно недавно, лет 10 назад. Что вызвало
                                    популярность этого <br/>относительно нового подхода и почему сейчас он в тренде,
                                    рассказал на конференции РИТ++ ...</p>
                            </div>
                            <div className="master--general__blocks--block">
                                <h5>Реактивное программирование на Java: как, зачем и стоит ли? </h5>
                                <p>Программирования появилась сравнительно недавно, лет 10 назад. Что вызвало
                                    популярность этого <br/>относительно нового подхода и почему сейчас он в тренде,
                                    рассказал на конференции РИТ++ ...</p>
                            </div>
                            <div className="master--general__blocks--block">
                                <h5>Реактивное программирование на Java: как, зачем и стоит ли? </h5>
                                <p>Программирования появилась сравнительно недавно, лет 10 назад. Что вызвало
                                    популярность этого <br/>относительно нового подхода и почему сейчас он в тренде,
                                    рассказал на конференции РИТ++ ...</p>
                            </div>
                            <div className="master--general__blocks--block">
                                <h5>Реактивное программирование на Java: как, зачем и стоит ли? </h5>
                                <p>Программирования появилась сравнительно недавно, лет 10 назад. Что вызвало
                                    популярность этого <br/>относительно нового подхода и почему сейчас он в тренде,
                                    рассказал на конференции РИТ++ ...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Masters;