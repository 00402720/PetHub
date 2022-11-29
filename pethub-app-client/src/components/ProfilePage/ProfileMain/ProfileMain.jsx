import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Profile from "./Profile/Profile";

import classes from "./ProfileMain.module.scss";


const ProfileMain = () => {

    return(

        <section className = { classes [ "ProfilePet" ] }>
            <ProfileInfo />
            <Profile />
            
        </section>
        


    )


}

export default ProfileMain;