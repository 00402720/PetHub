import petsimg from "../../../../assets/images/icons/PetBelt.png";

import classes from "./Profile.module.scss";

import AddPet from './AddPet/AddPet';

const pets = [
    {
        name:"Canelo",
        type:"dog",
        breed:"pastor aleman"
    },
    {
        name: "Michi",
        type: "cat",
        breed: "bicolor",
    },
    {
        name: "Rocco",
        type: "dog",
        breed: "golden retriever"
    },
    {
        name: "Remi",
        type: "rat",
        breed: "dumbo rat"
    }
];

const Profile = () => {

    return (
        <section className = { classes [ "ProfileSection" ] }>
            <div>
                <article className = { classes [ "YourPets" ] }>
                
                    <figure className={ classes [ "FigPic"]}>
                        <img src= { petsimg }  />
                    </figure>
                    <p>Your&nbsp;&nbsp;&nbsp;Pets</p>
               
                </article>

                <AddPet petsInfo={pets}/>
            </div>
                
                
            
                        
        </section>

    )   
}

export default Profile;