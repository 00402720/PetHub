import classes from './Header.module.scss';
import button from './Buttons.module.scss';
import figure from './Figures.module.scss';

import logo from './../../assets/images/logo/logo-01.png';
import profile from './../../assets/images/icons/profile-01.png';
import login from './../../assets/images/icons/login-door-01.png';

const Header = () => {
    const directLogin = () => {
        window.location.href = '/login';
        return;
    }

    const directProfile = () => {
        window.location.href = '/profile';
        return;
    }

    return(
        <header className = {classes ["Header"]}>
            {/* Logo & Name */}
            <div>
                <h1>PetHub</h1>
                <figure className = {figure ["Figures"]}>
                    <img src = { logo } />
                </figure>
            </div>
            <div className = {button ["Buttons"]}>
                <div>
                    <button onClick = {directLogin}>
                        <figure className = {figure ["Profiles"]}>
                            <img src = {login}/>
                        </figure>
                        <p>Log In</p>
                    </button>
                </div>
                <button onClick = {directProfile}>
                    <figure className = {figure ["Profiles"]}>
                        <img src = {profile}/>
                    </figure>
                </button>
            </div>

            {/*  */}

        </header>
    )
}

export default Header;
