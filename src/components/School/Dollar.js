import React from 'react';

const Dollar = () => {
    return (
        <>
            <div id="dollar">
                <div className="container">
                    <div className="dollar--general">
                        <div className="dollar--general__item">
                            <h1>Уровень пакетов</h1>
                            <p>Списания будут автоматическими. Вы всегда можете отменить подписку в <br/>Вашем личном
                                кабинете и больше списаний не будет</p>
                        </div>
                        <div className='dollar--general__blocks'>
                            <div className="dollar--general__blocks--block">
                                <h5>Месяц +</h5>
                                <p>Доступны: Все статьи</p>
                                <h2>105,00 $</h2>
                                <p>Ежемесячно</p>
                                <div className='dollar--general__blocks--block__btn'>
                                   <button className='dollar--general__blocks--block__btn--one'>Оформить подписку</button>
                                   <button className='dollar--general__blocks--block__btn--two'>Подробнее</button>
                                </div>
                            </div>
                            <div className="dollar--general__blocks--block">
                                <h5>Год +</h5>
                                <p>Доступны: Все Мастер классы и статьи и <br/>курсы</p>
                                <h2>585,00 $</h2>
                                <p>Ежегодно</p>
                                <div className='dollar--general__blocks--block__btn'>
                                    <button className='dollar--general__blocks--block__btn--one'>Оформить подписку</button>
                                    <button className='dollar--general__blocks--block__btn--two'>Подробнее</button>
                                </div>
                            </div>
                            <div className="dollar--general__blocks--block">
                                <h5>Год</h5>
                                <p>Доступны: Все статьи</p>
                                <h2>220,00 $</h2>
                                <p>Ежемесячно</p>
                                <div className='dollar--general__blocks--block__btn'>
                                    <button className='dollar--general__blocks--block__btn--one'>Оформить подписку</button>
                                    <button className='dollar--general__blocks--block__btn--two'>Подробнее</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dollar;