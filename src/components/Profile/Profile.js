import React from 'react';
import {BsPerson} from "react-icons/bs";
import {IoChatbubbleOutline, IoWalletOutline} from "react-icons/io5";
import {FiCreditCard, FiLogOut} from "react-icons/fi";
import {BiBasket} from "react-icons/bi";
import person from '../../asstets/img/person.svg'
import card from '../../asstets/img/card.svg'
import group from '../../asstets/img/group-card.svg'
import {SiVisa} from "react-icons/si";

const Profile = () => {
    return (
        <>
            <section id="profile">
                <div className="container">
                    <div className="profile--general">
                        <p className='profile--general__p'>Главная <span>/ Профиль / </span></p>
                        <div className="profile--general__left">
                            <div className="profile--general__left--block">
                                <img src={person} alt="img"/>
                                <button className='profile--general__left--block__btn'>Добавить фото</button>
                                <div className="btn profile--general__left--block__side">
                                    <div>
                                        <BsPerson className='icon'/>
                                        <label htmlFor="data">Личные данные</label>
                                    </div>
                                    <hr/>
                                    <div>
                                        <IoWalletOutline className='icon'/>
                                        <label htmlFor="payment">Платежные карты</label>
                                    </div>
                                    <hr/>
                                    <div>
                                        <FiCreditCard className='icon'/>
                                        <label htmlFor="subscriptions">Подписки</label>
                                    </div>
                                    <hr/>
                                    <div>
                                        <IoChatbubbleOutline className='icon'/>
                                        <label htmlFor="comments">Комментарии</label>
                                    </div>
                                    <hr/>
                                    <div>
                                        <BiBasket className='icon'/>
                                        <label htmlFor="purchases">Мои покупки</label>
                                    </div>
                                    <hr/>
                                    <div>
                                        <FiLogOut className='icon'/>
                                        <p className='p-out'>Выйти</p>
                                    </div>
                                </div>
                            </div>
                            <div className="profile--general__left--right">
                                <div className="tabs">
                                    <input className='tabs-input' type="radio" name="tabs" id="data"/>
                                    <input className='tabs-input' type="radio" name="tabs" id="payment"/>
                                    <input className='tabs-input' type="radio" name="tabs" id="subscriptions"/>
                                    <input className='tabs-input' type="radio" name="tabs" id="comments"/>
                                    <input className='tabs-input' type="radio" name="tabs" id="purchases"/>


                                    <div className='data'>
                                        <div className="data--desc">
                                            <h1>Личные данные</h1>
                                            <div className="data--desc__block">
                                                <div className="data--desc__block--left">
                                                    <p>ФИО</p>
                                                    <input className='data--desc__block--left__inp' type="text"
                                                           placeholder='Осмонова Нурай...'/>
                                                    <p>Номер телефон</p>
                                                    <input className='data--desc__block--left__inp' type="number"
                                                           placeholder='+996  500 99 80 88...'/>
                                                    <p>Email</p>
                                                    <input className='data--desc__block--left__inp' type="email"
                                                           placeholder='osmonovanurai05@gmail.com...'/>
                                                    <p>Пол</p>
                                                    <div className='data--desc__block--left__pol'>
                                                        <div className="data--desc__block--left__pol--man">
                                                            <input className='data--desc__block--left__pol--man__check'
                                                                   type="checkbox"/>
                                                            <h2>Мужской</h2>
                                                        </div>
                                                        <div className="data--desc__block--left__pol--man">
                                                            <input className='data--desc__block--left__pol--man__check'
                                                                   type="checkbox"/>
                                                            <h2>Женский</h2>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="data--desc__block--right">
                                                    <p>Дата рождения</p>
                                                    <div className='data--desc__block--right__birth'>
                                                        <select className='data--desc__block--right__birth--num'>
                                                            <option>1</option>
                                                            <option>2</option>
                                                            <option>3</option>
                                                            <option>4</option>
                                                            <option>5</option>
                                                            <option>6</option>
                                                            <option>7</option>
                                                            <option>8</option>
                                                            <option>9</option>
                                                            <option>10</option>
                                                            <option>11</option>
                                                            <option>12</option>
                                                            <option>13</option>
                                                            <option>14</option>
                                                            <option>15</option>
                                                            <option>16</option>
                                                            <option>17</option>
                                                            <option>18</option>
                                                            <option>19</option>
                                                            <option>20</option>
                                                            <option>21</option>
                                                            <option>22</option>
                                                            <option>23</option>
                                                            <option>24</option>
                                                            <option>25</option>
                                                            <option>26</option>
                                                            <option>27</option>
                                                            <option>28</option>
                                                            <option>29</option>
                                                            <option>30</option>
                                                            <option>31</option>
                                                        </select>
                                                        <select className='data--desc__block--right__birth--moth'>
                                                            <option>январь</option>
                                                            <option>февраль</option>
                                                            <option>март</option>
                                                            <option>апрель</option>
                                                            <option>май</option>
                                                            <option>июнь</option>
                                                            <option>июль</option>
                                                            <option>август</option>
                                                            <option>сентябрь</option>
                                                            <option>октябрь</option>
                                                            <option>ноябрь</option>
                                                            <option>декабрь</option>
                                                        </select>
                                                        <select className='data--desc__block--right__birth--num'>
                                                            <option>2000</option>
                                                            <option>2001</option>
                                                            <option>2002</option>
                                                            <option>2003</option>
                                                            <option>2004</option>
                                                            <option>2005</option>
                                                            <option>2006</option>
                                                            <option>2007</option>
                                                            <option>2008</option>
                                                            <option>2009</option>
                                                        </select>
                                                    </div>
                                                    <p>Страна</p>
                                                    <select className='data--desc__block--right__select'>
                                                        <option>Кыргызстан</option>
                                                        <option>Казахстан</option>
                                                        <option>Саудовская Аравия</option>
                                                        <option>Россия</option>
                                                        <option>Пакистан</option>
                                                    </select>
                                                    <p>Город</p>
                                                    <select className='data--desc__block--right__select'>
                                                        <option>Бишкек</option>
                                                        <option>Астана</option>
                                                        <option>Эр-Рияд</option>
                                                        <option>Москва</option>
                                                        <option>Исламабад</option>
                                                    </select>
                                                    <p>Род деятельности</p>
                                                    <input className='data--desc__block--right__inp' type="email"
                                                           placeholder='Студент...'/>

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className='payment'>
                                        <div className="payment--general">
                                            <div className='payment--general__title'>
                                                <h1>Платежные карты</h1>
                                            </div>
                                            <div className='payment--general__blocks'>
                                                <div className="payment--general__blocks--block">
                                                    <h1>Visa Classic</h1>
                                                    <div className="payment--general__blocks--block__img">
                                                        <img src={card} alt="img"/>
                                                        <img src={group} alt="img"/>
                                                    </div>
                                                    <p>4000 1234 5678 9010</p>
                                                    <h6>12/34</h6>
                                                    <SiVisa className='payment--general__blocks--block__icon'/>
                                                </div>
                                                <div className="payment--general__blocks--block">
                                                    <h1>Visa Classic</h1>
                                                    <div className="payment--general__blocks--block__img">
                                                        <img src={card} alt="img"/>
                                                        <img src={group} alt="img"/>
                                                    </div>
                                                    <p>4000 1234 5678 9010</p>
                                                    <h6>12/34</h6>
                                                    <SiVisa className='payment--general__blocks--block__icon'/>
                                                </div>
                                            </div>
                                            <div className="payment--general__card">
                                                <h1>Добавить карту</h1>
                                                <p>Добавьте свою карту, чтобы больше не тратить время на ввод данных
                                                    вручну</p>
                                                <button>Добавить карту</button>
                                                <p>Для проверки карты будет снята минимальная сумма в размере 1$. Сумма
                                                    будет <br/> возвращена вам а течении 48 часов</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Profile;