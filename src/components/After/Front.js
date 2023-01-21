import React from 'react';
import artist from "../../asstets/img/meditate.png";


const Front = () => {
    return (
        <>
            <section id="front">
                <div className="container">
                    <div className="front--general">
                        <div className='front--general__so'>
                            <div className='front--general__so--no'>
                                <h1>ПРОГРАММА КУРСА</h1>
                              <div className='front--general__so--no__but'>
                                  <div className='front--general__so--no__but--such'>
                                      <h1>Модуль 1</h1>
                                      <h2>Reactivity</h2>
                                  </div>
                                  <div className='front--general__so--no__but--such'>
                                      <h1>Модуль 2</h1>
                                      <h2>Reactive approach</h2>
                                  </div>
                                  <div className='front--general__so--no__but--such'>
                                      <h1>Модуль 3</h1>
                                      <h2>Observable example</h2>
                                  </div>
                                  <div className='front--general__so--no__but--such'>
                                      <h1>Модуль 4</h1>
                                      <h2>Implementing and subscribing to an observer
                                      </h2>
                                  </div>
                                  <div className='front--general__so--no__but--such'>
                                      <h1>Модуль 5</h1>
                                      <h2>Reactive Streams spec</h2>
                                  </div>
                                  <div className='front--general__so--no__but--such'>
                                      <h1>Модуль 6</h1>
                                      <h2>Reactive Streams spec</h2>
                                  </div>
                              </div>
                                <button className='front--general__so--no__btn'>Зарегистрироваться</button>
                            </div>
                            <img src={artist} alt=""/>

                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default Front;