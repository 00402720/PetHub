import React from 'react';
import classes from './Login.module.scss';

import logo from "../../assets/images/logo/logo-01.png"

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

const LoginPage = () => {

    const onSubmitHandler = (e) => {
      e.preventDefault();

      const data = new FormData(e.target);

      if(data.get("password").length == 0){
        console.log("no se permiten contraseñas vacías");
        window.location.href = "/login";
        return;
      }

      users.map(type => {
        if(data.get("password") == type.password && data.get("username") == type.username){
          window.location.href = "/";
        }
        else{
          console.log("usuario no encontrado");
          window.location.href = "/login";
        }
      })
    }

    return (
      <div className={ classes ["App"] }>
        <div className={ classes ["left"] }>
        <img src= {logo}/>
        </div>
        <div className={ classes ["login-card"] }>
          <h2>Welcomeback to Pethub!</h2>
          <h3>Enter your credentials</h3>
          <form className={ classes ["login-form"]} onSubmit={onSubmitHandler}>
            <input className={ classes ["control"] } name="username" type="text" placeholder="Username"/>
            <input className={ classes ["control"] } name="password" id="password" type="password" placeholder="Password" />
            <input className={ classes ["control-btn"] } type="submit"/>
          </form>
        </div>        
      </div>
    );
};

export default LoginPage;