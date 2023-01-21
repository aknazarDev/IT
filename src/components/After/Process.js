import React from 'react';
import art from "../../asstets/img/pencil.png";
import arts from "../../asstets/img/brilliant.png";
import artist from "../../asstets/img/time.png";
import article from "../../asstets/img/evgenii.png";


const Process = () => {
    return (
        <>
            <section id="process">
                <div className="container">
                    <div className="process--general">
                        <div className='process--general__such'>
                            <div className='process--general__such--no'>
                                <img src={art} alt=""/>
                                <h1>100 материалов</h1>
                                <p>Только полезная информация, никакой воды. Применяйте эти знания первыми!</p>
                            </div>
                            <div className='process--general__such--no'>
                                <img src={arts} alt=""/>
                                <h1>100% эксклюзив</h1>
                                <p>Курс записан эксклюзивно для нашей платформы</p>
                            </div>
                            <div className='process--general__such--no'>
                                <img src={artist} alt=""/>
                                <h1>В любое время, в любом месте</h1>
                                <p>Занимайтесь как вам удобно и где угодно, на своем мобильном или компьютере</p>
                            </div>

                        </div>
                        <div className='process--general__but'>
                            <img src={article} alt=""/>
                            <span>Мастер класс ведет</span>
                            <h1>Евгений Александрович</h1>
                            <p> Frontend developer </p>
                        </div>
                        <div className='process--general__good'>
                            <h1>Процесс обучения</h1>
                            <div className='process--general__good--not'>
                                <div className='process--general__good--not__make'>
                                    <span>1</span>
                                    <h1>Мастер-класс</h1>
                                    <p>Вы получите доступ ко всем урокам
                                        мастер-класса и другим дополнительным
                                        материалам</p>

                                </div>
                                <div className='process--general__good--not__make'>
                                    <span>1</span>
                                    <h1>Мастер-класс</h1>
                                    <p>Вы получите доступ ко всем урокам
                                        мастер-класса и другим дополнительным
                                        материалам</p>

                                </div>
                                <div className='process--general__good--not__make'>
                                    <span>1</span>
                                    <h1>Мастер-класс</h1>
                                    <p>Вы получите доступ ко всем урокам
                                        мастер-класса и другим дополнительным
                                        материалам</p>

                                </div>
                                <div className='process--general__good--not__make'>
                                    <span>1</span>
                                    <h1>Мастер-класс</h1>
                                    <p>Вы получите доступ ко всем урокам
                                        мастер-класса и другим дополнительным
                                        материалам</p>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default Process;