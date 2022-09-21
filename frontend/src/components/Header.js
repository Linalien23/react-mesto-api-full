import React, {useState} from 'react';
import logo from '../images/header-logo.svg';
import { Route, Link } from 'react-router-dom';


function Header({email, onSignOut}) {

    const [isSelected, setIsSelected] = useState(false);

    function handleClickHeaderButton() {
        setIsSelected(!isSelected);
    }

    return (
        <header className="header">
            <img className="header__logo" src={logo} alt="лого" />
            <Route path="/sign-in">
                <Link to="sign-up" className="header__button">Регистрация</Link>
            </Route>
            <Route path="/sign-up">
                <Link to="sign-in" className="header__button">Войти</Link>
            </Route>
            <Route exact path="/">
                <p className= "header__text">{email}</p>
                <button className="header__button"  onClick={() => {handleClickHeaderButton(); onSignOut();}}>Выйти</button>
                {/* <Link to="sign-in" className="header__button" onClick={handleSignOut}>Выйти</Link> */}
            </Route>
        </header>
    );
}

export default Header;