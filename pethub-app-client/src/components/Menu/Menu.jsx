import classes from './Menu.module.scss';

import addPets from '../../assets/images/icons/add-pets-01.png';
import userPfp from '../../assets/images/icons/User-pfp-01.png';
import signUp from '../../assets/images/icons/sign-up-01.png';

const Menu = () => {
    const directSignUp = () => {
        window.location.href = '/sign-up';
        return;
    }

    const directProfile = () => {
        window.location.href = '/Profile';
        return;
    }

    return(
        <div className = {classes ["Menu"]}>
            <article>
                <button onClick = {directProfile}>
                    <figure>
                        <img src = {userPfp}></img>
                    </figure>
                    <p>Profile</p>
                </button>
            </article>
            <article>
            <button onClick = {directSignUp}>
                    <figure>
                        <img src = {signUp}></img>
                    </figure>
                    <p>Sign Up</p>
                </button>
            </article>
            <article>
            <button onClick = {directProfile}>
                    <figure>
                        <img src = {addPets}></img>
                    </figure>
                    <p>Add Pet</p>
                </button>
            </article>
        </div>
    )
}

export default Menu;