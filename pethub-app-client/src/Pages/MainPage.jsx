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
    "image": "https://media.cnn.com/api/v1/images/stellar/prod/220818142713-dogs-tears-emotions-wellness-stock.jpg?c=original",
    "description": "pequeña descripcion"
  },
  {
    "_id": {
      "$oid": "637d6272650d3e1bce48efa4"
    },
    "id": "3",
    "title": "Pethub - User: user, Mascota: nombre",
    "image": "https://www.purina.co.uk/sites/default/files/2020-12/Understanding%20Your%20Cat%27s%20Body%20LanguageHERO.jpg",
    "description": "pequeña descripcion"
  },
  {
    "_id": {
      "$oid": "637d6272650d3e1bce48efa3"
    },
    "id": "2",
    "title": "Pethub - User: user, Mascota: nombre",
    "image": "https://media.wired.co.uk/photos/606d9c691e0ddb19555fb809/16:9/w_2992,h_1683,c_limit/dog-unsolicited.jpg",
    "description": "Cambia la descripcion misma imagen"
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