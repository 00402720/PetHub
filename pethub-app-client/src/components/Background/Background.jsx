import classes from './Background.module.scss';


const Background = () => {
    return(
        <section className = {classes ["Background_Spacing"]}>
            <div className = {classes ["Back_Figure_Light_Orange"]}> {/* Light Orange */}</div>
            <div className = {classes ["Back_Figure_Pale_Orange"]}> {/* Pale Orange */}</div>
        </section>
    )
}
//
export default Background;