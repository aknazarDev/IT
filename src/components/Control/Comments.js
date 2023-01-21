import React from 'react';
import answer from "../../asstets/img/answer.svg"
import ka from "../../asstets/img/ka.svg"
import ti from "../../asstets/img/ti.svg"
import km from "../../asstets/img/km.svg"

const Comments = () => {
    return (
        <>
            <section id="comments">
                <div className='container'>
                    <div className="comments--general">
                        <div className='comments--general__item'>
                            <div className="comments--general__item--text">
                                <h1>Комментарии</h1>
                            </div>
                            <div className="comments--general__item--area">
                                <textarea className="comments--general__item--area__com">Ваш комментарий</textarea>
                                <button>Отправить</button>
                            </div>
                            <div className="comments--general__item--answer">
                                <div>
                                    <img src={answer} alt=""/>
                                </div>
                                <div>
                                    <div className="comments--general__item--answer__logo">
                                        <h3>Осмонова Нурай</h3> <h5> / Около минуты назад</h5>
                                    </div>
                                    <h6>Очень понравились уроки. Все более чем понятно! </h6>
                                    <p>Ответить</p>
                                </div>
                            </div>
                            <div className="comments--general__item--answer">
                                <div>
                                    <img src={ka} alt=""/>
                                </div>
                                <div>
                                    <div className="comments--general__item--answer__logo">
                                        <h3>Эгембердиева Кунсулуу</h3> <h5> / Около минуты назад</h5>
                                    </div>
                                    <h6>Классный урок, первый раз вижу такое подробное <br/>объяснение всего
                                        происходящего
                                    </h6>
                                    <p>Ответить</p>
                                </div>
                            </div>
                            <div className="comments--general__item--answer">
                                <div>
                                    <img src={ti} alt=""/>
                                </div>
                                <div>
                                    <div className="comments--general__item--answer__logo">
                                        <h3>Таалайбек Ыманкулов</h3> <h5> / Около минуты назад</h5>
                                    </div>
                                    <h6>Как мне кажется, в конце видео, необходимо было сказать о том, <br/>что
                                        информация - это то(в данном случае число) с помощью чего <br/>можно устранить
                                        некую неопределенность(неизвестность) А так <br/>вроде все замечательно.
                                    </h6>
                                    <p>Ответить</p>
                                </div>
                            </div>
                            <div className="comments--general__item--answerlast">
                                <div>
                                    <img src={km} className="comments--general__item--answer__images" alt=""/>
                                </div>
                                <div className="comments--general__item--answerlast__block">
                                    <div className="comments--general__item--answer__logo">
                                        <h3>Эгембердиева Кунсулуу</h3> <h5> / Около минуты назад</h5>
                                    </div>
                                    <h6>Курс является выжимкой - самым соком в вопросах построения команды. <br/>
                                        пересмотрел свое отношение ко многим критериям, факторам и своим <br/>
                                        действиям и взглядам по вопросам командообразования. <br/>вроде все замечательно.
                                    </h6>
                                    <p>Ответить</p>
                                </div>
                            </div>
                            <div className="comments--general__item--answer">
                                <div>
                                    <img src={answer} alt=""/>
                                </div>
                                <div>
                                    <div className="comments--general__item--answer__logo">
                                        <h3>Осмонова Нурай</h3> <h5> / Около минуты назад</h5>
                                    </div>
                                    <h6>Мой первый день в мире программирования ✨ Первый <br/>ролик 😊 Вы просто
                                        гениально объясняете, продолжаю <br/>смотреть 😉 Спасибо!
                                    </h6>
                                    <p>Ответить</p>
                                </div>
                            </div>
                            <button>Смотреть все</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};


export default Comments;