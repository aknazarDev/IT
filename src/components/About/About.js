import React from 'react';
import arts from '../../asstets/img/left.png'
import arka from '../../asstets/img/right.png'
import Certificate from "./Certificate";
import Sliders from "./Sliders";
import Submit from "../Home/Submit";
import {Link} from "react-router-dom";

const About = () => {
    window.scroll(0,0)
    return (
        <>
           <section id='about'>
               <div className='container'>
                   <div className='about--general'>
                       <Link to={'/home'}>
                           <h1>Главная / <Link to={'/about'}><span style={{color:'white'}}>О нас</span></Link></h1>
                       </Link>

                       <div className='about--general__ok'>
                           <div className='about--general__ok--to'>
                               <h2>О нас</h2>
                               <p>
                                   Курсы IT-профессий Motion Web была основана в 2021-ом году в Бишкеке с целью <br/>дать возможность каждому человеку, даже без опыта в технологиях, гарантированно <br/>
                                   освоить IT-профессию.
                                   <br/>
                                   <br/>
                                   <span>Форма обучения - онлайн, с применением электронного обучения и дистанционных образовательных технологий  на образовательной платформе Moodle и прямые эфиры с преподавателем. 154 академических часа трудоёмкости учебной деятельности отведено практическим занятиям и выполнению практических заданий.</span>
                               </p>
                           </div>
                           <div className='about--general__ok--no'>
                               <img src={arts} alt=""/>
                               <img src={arka} alt=""/>
                           </div>

                       </div>

                   </div>

               </div>
           </section>
            <section id='about'>
                <div className='container'>
                    <div className='about--general'>
                        <h1>
                            Главная /<span> О нас</span>
                        </h1>
                        <div className='about--general__ok'>
                            <div className='about--general__ok--to'>
                                <h2>О нас</h2>
                                <p>
                                    Курсы IT-профессий Motion Web была основана в 2021-ом году в Бишкеке с целью <br/>дать
                                    возможность каждому человеку, даже без опыта в технологиях, гарантированно <br/>
                                    освоить IT-профессию.
                                    <br/>
                                    <br/>
                                    <span>Форма обучения - онлайн, с применением электронного обучения и дистанционных образовательных технологий  на образовательной платформе Moodle и прямые эфиры с преподавателем. 154 академических часа трудоёмкости учебной деятельности отведено практическим занятиям и выполнению практических заданий.</span>
                                </p>
                            </div>
                            <div className='about--general__ok--no'>
                                <img src={arts} alt=""/>
                                <img src={arka} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Certificate/>
            <Sliders/>
            <Submit/>
        </>
    );
};

export default About;