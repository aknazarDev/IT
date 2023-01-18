import React, {useState} from 'react';
import logo2 from '../../asstets/img/logo2.svg'
import {FaRegEye, FaRegEyeSlash} from "react-icons/fa";
import {Link} from "react-router-dom";

const Checking = () => {
    const [showPassword, setShowPassword] = useState(false)
    const togglePassword = (e) => {
        if (showPassword) {
            setShowPassword(false)
        } else {
            setShowPassword(true)
        }
    }
    return (
        <>
            <section id="checking">
                <div className="container">
                    <div className="checking--general">
                        <div className="checking--general__img">
                            <img src={logo2} alt=""/>
                            <form>
                                <div className="email">
                                    <p>E mail*</p>
                                    <input type="email" />
                                </div>
                                <div className="password">
                                    <p>Пароль*</p>
                                    <input type={showPassword ? 'text' : 'password'}/>
                                    <button type="button" onClick={(e) => togglePassword(e)}>
                                        <FaRegEyeSlash onClick={() => showPassword ? <FaRegEye/> : <FaRegEye/>}/>
                                    </button>
                                </div>
                                <div className='check'>
                                    <Link to={'/profile'}>
                                        <button>Войти</button>
                                    </Link>
                                    <a href="#">Забыли пароль?</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Checking;