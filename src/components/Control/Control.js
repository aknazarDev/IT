import React from 'react';
import arts from "../../asstets/img/left.png";
import abroad from "../../asstets/img/artboard.png";
import statistica from "../../asstets/img/statistica.svg";
import youtube from "../../asstets/img/youtube.svg";
import joni from "../../asstets/img/joni.svg";
import microphoto from "../../asstets/img/microphoto.svg";
import dosk from "../../asstets/img/dosk.svg";
import skills from "../../asstets/img/skills.svg";
import back from "../../asstets/img/back.svg";
import {IoIosArrowBack} from "react-icons/io";
import {MdArrowForwardIos} from "react-icons/md";
import Information from "./Information";


const Control = () => {
    return (
        <>
            <section id="control">
                <div className="container">
                    <div className="control--general">
                        <div className="control--general__status">
                            <div className="control--general__status--item">
                                <div className="control--general__status--item__reactive">
                                    <div className="control--general__status--item__reactive--gen">
                                        <div>
                                            <h2>Reactivity</h2>
                                        </div>
                                        <div className="control--general__status--item__reactive--gen__micro">
                                            <div>
                                                <img src={joni} alt="img"/>
                                            </div>
                                            <div className="control--general__status--item__reactive--gen__micro--prof">
                                                <h5>Евгений Александрович</h5>
                                                <h6>Frontend developer</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="control--general__status--item__reactive--serval">
                                        <div>
                                            <p>Когда нужно переходить от прокачивания личной <br/>
                                                эффективности к изучению эффективности командой?</p>
                                            <div className='control--general__status--item__reactive--img'>
                                                <img src={statistica} alt="img"/>
                                            </div>
                                        </div>
                                        <div className="control--general__status--item__reactive--serval__block">
                                            <div
                                                className="control--general__status--item__reactive--serval__block--fon">
                                                <div>
                                                    <img src={microphoto} alt="img"/>
                                                </div>
                                                <div>
                                                    <h5>1 Reactivity</h5>
                                                    <h6>Урок</h6>
                                                </div>
                                            </div>
                                            <div
                                                className="control--general__status--item__reactive--serval__block--fon">
                                                <div>
                                                    <img src={dosk} alt="img"/>
                                                </div>
                                                <div>
                                                    <h5>1 Reactivity</h5>
                                                    <h6>Урок</h6>
                                                </div>
                                            </div>
                                            <div
                                                className="control--general__status--item__reactive--serval__block--fon">
                                                <div>
                                                    <img src={skills} alt="img"/>
                                                </div>
                                                <div>
                                                    <h5>1 Reactivity</h5>
                                                    <h6>Урок</h6>
                                                </div>
                                            </div>
                                            <div
                                                className="control--general__status--item__reactive--serval__block--fon">
                                                <div>
                                                    <img src={back} alt="img"/>
                                                </div>
                                                <div>
                                                    <h5>1 Reactivity</h5>
                                                    <h6>Урок</h6>
                                                </div>
                                            </div>
                                            <div
                                                className="control--general__status--item__reactive--serval__block--fon">
                                                <div>
                                                    <img src={microphoto} alt="img"/>
                                                </div>
                                                <div>
                                                    <h5>1 Reactivity</h5>
                                                    <h6>Урок</h6>
                                                </div>
                                            </div>
                                            <div
                                                className="control--general__status--item__reactive--serval__block--fon">
                                                <div>
                                                    <img src={microphoto} alt="img"/>
                                                </div>
                                                <div>
                                                    <h5>1 Reactivity</h5>
                                                    <h6>Урок</h6>
                                                </div>
                                            </div>
                                            <div
                                                className="control--general__status--item__reactive--serval__block--fon">
                                                <div>
                                                    <img src={dosk} alt="img"/>
                                                </div>
                                                <div>
                                                    <h5>1 Reactivity</h5>
                                                    <h6>Урок</h6>
                                                </div>
                                            </div>
                                            <div
                                                className="control--general__status--item__reactive--serval__block--fon">
                                                <div>
                                                    <img src={skills} alt="img"/>
                                                </div>
                                                <div>
                                                    <h5>1 Reactivity</h5>
                                                    <h6>Урок</h6>
                                                </div>
                                            </div>
                                            <div
                                                className="control--general__status--item__reactive--serval__block--fon">
                                                <div>
                                                    <img src={back} alt="img"/>
                                                </div>
                                                <div>
                                                    <h5>1 Reactivity</h5>
                                                    <h6>Урок</h6>
                                                </div>
                                            </div>
                                            <div
                                                className="control--general__status--item__reactive--serval__block--fon">
                                                <div>
                                                    <img src={microphoto} alt="img"/>
                                                </div>
                                                <div>
                                                    <h5>1 Reactivity</h5>
                                                    <h6>Урок</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="control--general__status--item__btn">
                                    <div className="control--general__status--item__btn--one">
                                        <IoIosArrowBack/>
                                        <h5>Предыдущий урок</h5>
                                    </div>
                                    <div className="control--general__status--item__btn--two">
                                        <h5>Следующий урок</h5>
                                        <MdArrowForwardIos/>
                                    </div>
                                </div>
                            </div>
                            <div className='control--general__status--images'>
                                <a href="https://www.youtube.com/c/TheDastanOfficial/videos"><img
                                    src={youtube}
                                    className='control--general__status--images__image'alt="img"/></a>
                            </div>
                        </div>
                    </div>
                    <p>.
                    </p>
                    </div>

            </section>
            <Information/>
        </>
    );
};
                                <a href="https://www.youtube.com/c/TheDastanOfficial/videos"><img src={youtube}
                                className='control--general__status--images__image'alt="img"/></a>
                            </div>
                        </div>
                    </div>
                    <p>.</p>
                        <h1>Сертификат</h1>
                        <p>По окончании обучения выдается онлайн сертификат.</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Control;