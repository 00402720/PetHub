import classes from "./Footer.module.scss";

const Footer = () => {


    return(

        <section className={ classes [ "FooterSection" ] }> 
            
            <p className={ classes [ " Copy " ] }> ©CopyRight 2022 MonkeyTeam</p>
                    
        </section>
        

    )
}

export default Footer;