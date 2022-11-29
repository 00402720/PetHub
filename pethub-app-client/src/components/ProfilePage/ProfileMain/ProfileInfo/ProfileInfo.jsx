import pimage from "../../../../assets/images/icons/User.png";
import stateimage from "../../../../assets/images/icons/PLus.png";

import classes from "./ProfileInfo.module.scss";




const ProfileInfo = () => {

    return (
        <article className = { classes [ "TopCard" ] }>
                        <div className = { classes  [ "ProfileImg" ] }>
                            <figure className = { classes [ "Pprofile" ] }>
                                <img src = { pimage } />
                            </figure>
                        </div>
                        <div className = { classes [ "ProfileInfo" ] }>
                            <article className = { classes [ "Intop" ] }>
                                <p>@UserName</p>
                                <button className = { classes [ "Btop" ] }  >Edit Profile</button>
                            </article>
                            <article className = {classes [ "Inmiddle" ] }>
                                <p>00   Publications</p>
                                <p>00   Followers</p>
                                <p>00   In a row</p>
                            </article>
                            <article className = { classes ["Atype"] } >
                            <p>Account type : Personal</p>
                            </article>
                            <article className = {classes [ "Inbotton" ] }>
                                <p className = { classes [ "States" ] }>State</p>
                                <button>
                                    <figure className = {classes [ "Istate" ] }>
                                    <img src ={ stateimage } />
                                </figure>
                                </button>
                                
                                <p className = { classes [ "New" ] }> New... </p>
                            </article>
                        </div>
            </article>
    )   

}

export default ProfileInfo;