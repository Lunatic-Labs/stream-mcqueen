import React from 'react'
import "../stylepages/login.css"
import BackgroundImage from '../components/BackgroundImage';
import Header from '../components/Header';
import lipscombLogoWhiteMobile from '../assets/lipscombLogoWhiteResizedMobile.png';
import lipscombLogoWhite from '../assets/lipscombLogoWhiteResizedMobile.png';
import { useState } from 'react';
import { firebaseAuth } from '../utils/firebase-config';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export default function Login(props) {
    const [formValues, setFormValues] = useState({
        email: "",
        password: "",
    });
    const navigate = useNavigate()
    const handleLogIn = async () => {
        try {
            const {email, password} = formValues;
            await signInWithEmailAndPassword(firebaseAuth, email, password)
        } catch(err) {
            console.log(err)
        }
    };
    
    

    onAuthStateChanged(firebaseAuth,(currentUser)=> {
        if(currentUser) navigate("/"); //TODO: may want to add 2FA
    })
  return (
  <div className='login_container'>
    <BackgroundImage className ="background"/>
    <div className="login_content">
    <Header/>
    <div className="login_form-container flex column a-center j-center">
        <div className="login_form flex column a-center j-center">
           <div className="login_title">
              <img src={lipscombLogoWhite} alt="lipscomblogowhite" />
           </div>
           <div className="login_email">
              <h4 >Email</h4>
           </div>
           <div className="login_container flex column">
           <input 
                type="email" 
                placeholder='Email Address' 
                name='email' 
                className="login_input"
                value={formValues.email} 
                onChange={(e)=>
                setFormValues({
                    ...formValues,
                    [e.target.name]: e.target.value,
                })
             }
            />
            <div className="login_password">
              <h4>Password</h4>
           </div>
            <input 
                type="password" 
                placeholder='Password' 
                name='password' 
                className="login_input"
                value={formValues.password} 
                onChange={(e)=>
                setFormValues({
                    ...formValues,
                    [e.target.name]: e.target.value,
                })
              }
             />
               <button onClick={handleLogIn}className = "LogIn">Log In</button>
               <button onClick={()=>navigate(props.login? "/login" : "/signup")} className = "signUp">
                 {props.login ? "Log In" : "Create an account"}
                </button>
           </div>
        </div>
    </div>
  </div>

  </div>
  );
}



    

