import React from 'react';
import laptop from '../../asstets/img/boy.png'

const Hero = () => {
    return (
        <>
            <section id="hero">
                <div className="container">
                    <div className='hero--general'>
                        <div className='hero--general__text'>
                            <h1>IT образовательная <br/>платформа </h1>
                            <p>Наша образовательная платформа вам <br/>даст необходимые практические <br/>знания для адаптации в IT-сфере.</p>
                        </div>
                        <img className='hero--general__laptop' src={laptop} alt=""/>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;