import React from 'react';
import art from "../../asstets/img/art.png";
import {HiOutlineClipboardList} from "react-icons/hi";
import {Link} from "react-router-dom";

const Articlese = () => {
    window.scroll(0, 0)
    return (
        <>
            <section id="articles">
                <div className="container">
                    <Link to={'/home'}>
                        <h2 className='articles--h2'>
                            Главная /<Link to={'/course'}><span>Наши курсы</span></Link>
                        </h2>
                    </Link>
                    <div className="articles--general">
                        <h1 className='articles--general__title'>Статьи</h1>
                        <div className="articles--general__blocks" style={{
                            paddingBottom: '50px'
                        }}>
                            <div className="articles--general__blocks--block">
                                <img src={art} alt="img"/>
                                <h4>Статьи</h4>
                                <p>Мы подготовили подборку самых
                                    <br/> популярных курсов по направлению
                                    <br/> Java в IBS Training Center. </p>
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
                                    <br/> популярных курсов по направлению
                                    <br/> Java в IBS Training Center. </p>
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
                                    <br/> популярных курсов по направлению
                                    <br/> Java в IBS Training Center. </p>
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
                                    <br/> популярных курсов по направлению
                                    <br/> Java в IBS Training Center. </p>
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
                                    <br/> популярных курсов по направлению
                                    <br/> Java в IBS Training Center. </p>
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
                                    <br/> популярных курсов по направлению
                                    <br/> Java в IBS Training Center. </p>
                                <div className="articles--general__blocks--block__desc">
                                    <div className='articles--general__blocks--block__desc--icon'>
                                        <HiOutlineClipboardList/>
                                        <h1>Читать</h1>
                                    </div>
                                    <p>01.02.2022</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Articlese;