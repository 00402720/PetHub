import classes from './AddPet.module.scss';

import addpeti from "../../../../../assets/images/icons/addpets.png";
import Pet1 from "../../../../../assets/images/pictures/Peludo.webp";


const AddPet = ({ petsInfo = [] }) => {
    const mappedPosts = petsInfo.map(pet => {
        return(
            <>
                <article className = { classes [ "PetCard" ] }>
                    <figure className = { classes [ "PetFigure" ] }>
                        <img src = { Pet1 } className= { classes [ "PetImage" ] }/>
                    </figure>
                    <button className= { classes [ "PetName" ] }>
                        {pet.name}
                    </button>
                </article>
            </>
        );
    })

    return(
        <section>
            <article className = { classes [ "Pets" ] }>
                <button className ={ classes [ "AddPetB" ] }>
                    <figure>
                        <img src= { addpeti } />
                    </figure>
                </button>
            </article>
            {mappedPosts}
        </section>
    )
}

export default AddPet;