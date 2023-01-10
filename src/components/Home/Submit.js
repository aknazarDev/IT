import React from 'react';

const Submit = () => {
    return (
        <>
            <section id="submit">
                <div className="container">
                    <div className="submit--general">
                        <div className="submit--general__title">
                            <h1>Оставить заявку</h1>
                            <p>Заполните краткую форму с ключевым
                                <br/> вопросами, и мы подготовимся к разговору с
                                <br/> вами </p>
                        </div>
                        <div className="submit--general__inputs">
                            <p>ФИО*</p>
                            <input type="text"/>
                            <p>Номер телефон*</p>
                            <input type="text"/>
                            <p>Email*</p>
                            <input type="text"/>
                            <button>Отправить</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Submit;