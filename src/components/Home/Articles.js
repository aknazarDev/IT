import React from 'react';
import art from '../../asstets/img/art.png'
import {HiOutlineClipboardList} from "react-icons/hi";

const Articles = () => {
    return (
        <>
            <section id="articles">
                <div className="container">
                    <div className="articles--general">
                        <h1 className='articles--general__title'>Последние статьи</h1>
                        <div className="articles--general__blocks">
                            <div className="articles--general__blocks--block">
                                <img src={art} alt="img"/>
                                <h4>Статьи</h4>
                                <p>Мы подготовили подборку самых
                                    <br /> популярных курсов по направлению
                                    <br /> Java в IBS Training Center. </p>
                                <div className="articles--general__blocks--block__desc">
                                    <div className='articles--general__blocks--block__desc--icon'>
                                        <HiOutlineClipboardList/>
                                        <h1>Читать</h1>
                                    </div>
                                    <p>01.02.2022</p>
                                </div>
                            </div>
                            <div className="articles--general__blocks--block">
                                <img src={art} alt="img"/>
                                <h4>Статьи</h4>
                                <p>Мы подготовили подборку самых
                                    <br /> популярных курсов по направлению
                                    <br /> Java в IBS Training Center. </p>
                                <div className="articles--general__blocks--block__desc">
                                    <div className='articles--general__blocks--block__desc--icon'>
                                        <HiOutlineClipboardList/>
                                        <h1>Читать</h1>
                                    </div>
                                    <p>01.02.2022</p>
                                </div>
                            </div>
                            <div className="articles--general__blocks--block">
                                <img src={art} alt="img"/>
                                <h4>Статьи</h4>
                                <p>Мы подготовили подборку самых
                                    <br /> популярных курсов по направлению
                                    <br /> Java в IBS Training Center. </p>
                                <div className="articles--general__blocks--block__desc">
                                    <div className='articles--general__blocks--block__desc--icon'>
                                        <HiOutlineClipboardList/>
                                        <h1>Читать</h1>
                                    </div>
                                    <p>01.02.2022</p>
                                </div>
                            </div>
                            <div className="articles--general__blocks--block">
                                <img src={art} alt="img"/>
                                <h4>Статьи</h4>
                                <p>Мы подготовили подборку самых
                                    <br /> популярных курсов по направлению
                                    <br /> Java в IBS Training Center. </p>
                                <div className="articles--general__blocks--block__desc">
                                    <div className='articles--general__blocks--block__desc--icon'>
                                        <HiOutlineClipboardList/>
                                        <h1>Читать</h1>
                                    </div>
                                    <p>01.02.2022</p>
                                </div>
                            </div>
                            <div className="articles--general__blocks--block">
                                <img src={art} alt="img"/>
                                <h4>Статьи</h4>
                                <p>Мы подготовили подборку самых
                                    <br /> популярных курсов по направлению
                                    <br /> Java в IBS Training Center. </p>
                                <div className="articles--general__blocks--block__desc">
                                    <div className='articles--general__blocks--block__desc--icon'>
                                        <HiOutlineClipboardList/>
                                        <h1>Читать</h1>
                                    </div>
                                    <p>01.02.2022</p>
                                </div>
                            </div>
                            <div className="articles--general__blocks--block">
                                <img src={art} alt="img"/>
                                <h4>Статьи</h4>
                                <p>Мы подготовили подборку самых
                                    <br /> популярных курсов по направлению
                                    <br /> Java в IBS Training Center. </p>
                                <div className="articles--general__blocks--block__desc">
                                    <div className='articles--general__blocks--block__desc--icon'>
                                        <HiOutlineClipboardList/>
                                        <h1>Читать</h1>
                                    </div>
                                    <p>01.02.2022</p>
                                </div>
                            </div>
                        </div>
                        <button className='articles--general__btn'>Показать больше</button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Articles;