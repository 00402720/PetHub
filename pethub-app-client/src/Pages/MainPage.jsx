import Background from '../components/Background/Background';
import Header from '../components/Header/Header';
import Menu from '../components/Menu/Menu';
import GeneratePost from '../components/GeneratePost/GeneratePost';
import Posts from '../components/ShowPosts/Posts/Posts';


import classes from './MainPage.module.scss';

var body = document.body,
    html = document.documentElement;

var height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );

const dummyData = [
  {
    "_id": "637d6272650d3e1bce48efa2",
    "id": "1",
    "title": "Pethub - User: user, Mascota: nombre",
    "image": "data:image/jpeg;base64,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",
    "description": "pequeña descripcion"
  },
  {
    "_id": {
      "$oid": "637d6272650d3e1bce48efa3"
    },
    "id": "2",
    "title": "Pethub - User: user, Mascota: nombre",
    "image": "https://play-lh.googleusercontent.com/Jdnw_zqg__whDMACbqzV8Y-iftBh5-euDZtmxtgtfVTz_iBSf177xCbn37sFjdFRXvI",
    "description": "Cambia la descripcion misma imagen"
  },
  {
    "_id": {
      "$oid": "637d6272650d3e1bce48efa4"
    },
    "id": "3",
    "title": "Pethub - User: user, Mascota: nombre",
    "image": "https://play-lh.googleusercontent.com/Jdnw_zqg__whDMACbqzV8Y-iftBh5-euDZtmxtgtfVTz_iBSf177xCbn37sFjdFRXvI",
    "description": "pequeña descripcion"
  }
];


const MainPage = () => {
  const threeHeaders = Array.from({length: Math.round(height/250)}, (_, index) => {
    console.log(height);
    return <Background key={index}/>;
  })


    return(
    <div className={ classes ["MainPage"] }> 
      <Header />
      <div className = {classes ["BodyContainer"]}>
        <Menu />
        <GeneratePost />
        <Posts posts={dummyData}/>
      </div>
      <div className = {classes ["BackgroundContainer"]}>
        {threeHeaders};
      </div>
    </div>
    )
}

export default MainPage;