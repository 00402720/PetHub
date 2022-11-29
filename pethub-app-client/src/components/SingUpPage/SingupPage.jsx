import React, { useState } from 'react';
import classes from './SingUpMain.module.scss';
import logo from '../../assets/images/logo/logo-01.png';

const users = [
  {
    email: "marcoshernandez2006@gmail.com",
    username: "mhernandez",
    password: "marcoshndz"
  },
  {
    email: "marcoshernandez.grande2006@gmail.com",
    username: "mgrande",
    password: "marcosgrande"
  }
]

const SingupPage = () => {

    const onSubmitHandler = (e) => {
      e.preventDefault();

      const data = new FormData(e.target);
      
      if(data.get("password").length == 0){
        console.log("No se permiten contraseñas vacías");
        window.location.href = "/sign-up";
        return;
      }

      let user = {
        email: data.get("email"),
        username: data.get("username"),
        password: data.get("password")
      };

     window.location.href = "/";
    }

    return (
    <div className={ classes ["App"] }>
      <div className={classes["left"]}>
        <img src={logo} />
      </div>
      <div className ={classes["singup-card"]}>
        <h2>Welcome to Pethub!</h2>
        <h3>Sign in now and live the best experience with PetHub!</h3>
        <form className={classes["singup-form"]} onSubmit={onSubmitHandler}>
          <input className={classes["control"]} name="email" type="text" placeholder="Email" />
          <input className={classes["control"]} name="username" type="text" placeholder="Username" />
          <input className={classes["control"]} id="password" name="password" type="password" placeholder="Password" />
          <input className={classes["control"]} type="submit" text="Sign Up"/>
        </form>
      </div>
    </div>
    );
};

export default SingupPage;