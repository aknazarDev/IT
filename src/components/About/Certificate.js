import React from 'react';
import arts from "../../asstets/img/ser.png";

const Certificate = () => {
    return (
        <>
            <section id="certificate">
                <div className="container">
                    <div className="certificate--general">
                        <h1>Сертификат</h1>
                        <p>По окончании обучения выдается онлайн сертификат.</p>
                        <img src={arts} alt=""/>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Certificate;