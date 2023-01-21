import React from 'react';



const Visa = () => {
    return (
        <>
            <section id="visa">
                <div className="container">
                    <div className="visa--general">
                        <h1>Главная/ <span>Зарегистрироваться на курс</span></h1>
                        <div className='visa--general__so'>
                            <h1>Зарегистрироваться на курс</h1>
                         <div className='visa--general__so--top'>
                             <div className='visa--general__so--top__but'>
                                 <div className='visa--general__so--top__but--no'>
                                     <div className='visa--general__so--top__but--no__such'>
                                         <span>Курс</span>
                                         <h3>Frontend-разработчик</h3>
                                         <p>Идея реактивного программирования появилась сравнительно недавно, лет 10 назад. </p>
                                         <div className='visa--general__so--top__but--no__such--big'></div>
                                     </div>
                                     <div className='visa--general__so--top__but--no__such'>
                                         <span>Лектор</span>
                                         <h3>Евгений Александрович</h3>
                                         <p>Frontend разработчик</p>
                                         <div className='visa--general__so--top__but--no__such--big'></div>
                                     </div>
                                     <div className='visa--general__so--top__but--no__such'>
                                         <span>В курс входит </span>
                                         <p>3 модулей 60материалов </p>
                                         <div className='visa--general__so--top__but--no__such--big'></div>
                                     </div>
                                     <h4>* - материалы включают уроки, тесты и задания.
                                         Некоторые материалы могут быть недоступны при
                                         самостоятельном обучении. </h4>
                                 </div>
                             </div>
                             <div className='visa--general__so--top__great'>

                                 <form action="" className='visa--general__so--top__great--form'>
                                     <input type="text" placeholder='    Ф.И.О' className='visa--general__so--top__great--form__name'/>
                                     <input type="number" placeholder='    +996' className='visa--general__so--top__great--form__number'/>
                                     <input type="email" placeholder='    E-mail' className='visa--general__so--top__great--form__mail'/>
                                 </form>
                             </div>
                         </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Visa;