import classes from './GeneratePost.module.scss';

import FotoVideo from '../../assets/images/icons/FotoVideo-01.png';
import Activity from '../../assets/images/icons/Activity-01.png';
import Location from '../../assets/images/icons/Location-01.png';
import TagSomeone from '../../assets/images/icons/Tag-Someone-01.png';
import UserPfp from '../../assets/images/icons/user-pfp-01.png';

const GeneratePost = () => {
     return (
         <div className = {classes ["GeneratePostContainer"]}>
             <article className = {classes ["FillerContainer"]}>
                 <div className = {classes ["CreatePost"]}>
                        <figure>
                            <img src = {UserPfp}></img>
                        </figure>
                        <section className = {classes ["UserInfo"]}>
                            <div className = {classes ["Username"]}>
                                <h1>@username</h1>
                            </div>
                            <div className = {classes ["FillField"]}>
                                <input type="text" placeholder="Help the animals!"></input>
                            </div>
                        </section>
                 </div>
                 <hr />
                <div className = {classes ["ExtraContainer"]}>
                    <button>
                        <figure>
                            <img src = {FotoVideo}></img>
                            <p>Photo/Video</p>
                        </figure>
                    </button>
                    <button>
                        <figure>
                        <img src = {Activity}></img>
                            <p>Activity</p>
                        </figure>
                    </button>
                    <button>
                        <figure>
                        <img src = {Location}></img>
                            <p>Location</p>
                        </figure>
                    </button>
                    <button>
                        <figure>
                            <img src = {TagSomeone}></img>
                            <p>Tag</p>
                        </figure>
                    </button>
                </div>
             </article>
         </div>
     )
}

export default GeneratePost;