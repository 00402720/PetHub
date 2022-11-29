//import placeholder01 from '../../assets/images/pictures/pet-placeholder-01.jpeg';
import UserPfp from '../../assets/images/icons/user-pfp-01.png';
import LikeHeart from '../../assets/images/icons/like-heart-01.png';
import Comment from '../../assets/images/icons/comment-01.png';

import classes from './ShowPosts.module.scss';



const ShowPosts = ({ name = "", description = "", image = ""}) => {
    return (
        <div className = {classes ["Posts"]}>
            <article className = {classes ["PostInfo"]}>
                <div className = {classes ["UserInfo"]}>
                    <figure>
                        <img src = {UserPfp}/>
                    </figure>
                    <h2>@username</h2>
                </div>
                <div className = {classes ["PetName"]}>
                    <h1>{ name }</h1>
                </div>
                <div className = {classes ["Description"]}>
                    <p>{ description }</p>
                </div>
            </article>
            <article className = {classes ["PhotoContainer"]}>
                <figure>
                    <img src = {image}></img>
                </figure>
            </article>
            <article className = {classes ["Interaction"]}>
                <div>
                    <figure>
                        <img src = {LikeHeart}/>
                    </figure>
                    <figure>
                        <img src = {Comment}/>
                    </figure>
                </div>
                <div>
                    <figure>
                        <img src = {UserPfp} />
                    </figure>
                    <section>
                        <input type="text" placeholder="Write a comment..."/>
                    </section>
                </div>
            </article>
        </div>
    )
}

export default ShowPosts;
