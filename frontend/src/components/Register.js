import React from "react";
import { Link, useHistory } from 'react-router-dom';


function Register({ onButtonClick }) { // компонент регистрации пользователя

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    let history = useHistory();

    function handleChangeEmail(e) {
        setEmail(e.target.value)
    }

    function handleChangePassword(e) {
        setPassword(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        onButtonClick(email, password);
    }

    return (
        <section>

            <div className="register">

                <h3 className="authorize__title">Регистрация</h3>
                <form className=" popup__form authorize__form" name='login-form'  onSubmit={handleSubmit}>

                    <input
                        id="email-input"
                        value={email}

                        onChange={handleChangeEmail}
                        className="popup__input authorize__form-input"
                        type="email"
                        name="email"
                        placeholder="Email"
                        minLength="2"
                        maxLength="40"
                        required />

                    <input
                        id="password-input"
                        value={password}
                        onChange={handleChangePassword}
                        className="popup__input authorize__form-input"
                        type="password" name="password"
                        placeholder="Пароль"
                        minLength="2"
                        maxLength="200"
                        required />

                    <button
                        className="popup__submit-btn authorize__form-btn"
                        type="submit">
                        Зарегистрироваться
                    </button>

                    <p className="register__text">Уже зарегистрированы?
                        <Link to='sign-in' className="register__link"> Войти</Link>
                    </p>

                </form>
            </div>
        </section>
    );
}

export default Register;