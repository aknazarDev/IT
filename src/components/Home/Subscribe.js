import React from 'react';
import {Link} from "react-router-dom";

const Subscribe = () => {
    return (
        <section id='subscribe'>
            <div className="container">
                <div className="subscribe--general">
                    <div className="subscribe--general__block">
                        <div className="subscribe--general__block--title">
                            <h1>Подпишитесь сейчас за 19,00 $ / мес</h1>
                            <p>И получите доступ к материалам и кейсам, а также к новым
                                <br /> мастер-классам </p>
                        </div>
                        <div className="subscribe--general__block--btn">
                            <button className='subscribe--general__block--btn'>Оформить подписку</button>
                            <Link to={'/package'}>
                                <p>Подробнее о пакетах </p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Subscribe;