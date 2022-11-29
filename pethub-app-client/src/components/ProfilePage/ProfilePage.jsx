import Header from "./ProfileHeader/Header";
import Main from "./ProfileMain/ProfileMain";
import Footer from "./ProfileFooter/Footer";
import classes from "./ProfilePage.module.scss";



const ProfilePage = () => {
    return(
    <div className={ classes ["App"] }>
      <Header />
      <Main />
      <Footer></Footer>
      
      
    </div>
    )
}

export default ProfilePage;