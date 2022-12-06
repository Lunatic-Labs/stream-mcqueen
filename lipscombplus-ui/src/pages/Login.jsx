import React from 'react'
import "../stylepages/login.css"
import BackgroundImage from '../components/BackgroundImage';
import Header from '../components/Header';
import lipscombLogoWhite from '../assets/lipscombLogoWhiteResized.png';
import lipscombLogoWhiteMobile from '../assets/lipscombLogoWhiteResizedMobile.png';
import { useState, useEffect } from 'react';
import { firebaseAuth } from '../utils/firebase-config';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { signInWithGoogle } from "../utils/firebase-config";


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
    
    

    const handleSubmit = event => {
      handleLogIn();
      event.preventDefault();

  }

    onAuthStateChanged(firebaseAuth,(currentUser)=> {console.log(currentUser)
        if(currentUser) navigate("/"); //TODO: may want to add 2FA
    })
/////////////////////////////////////////////////////////////////////////////////  This code checks for mobile device
    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
      function handleWindowResize() {
        setWindowSize(getWindowSize());
      }
  
      window.addEventListener('resize', handleWindowResize);
  
      return () => {
        window.removeEventListener('resize', handleWindowResize);
      };
    }, []);

    function getWindowSize() {
        const {innerWidth, innerHeight} = window;
        return {innerWidth, innerHeight};
      }
    ////////////////////////////////////////////////////////////////////  
    if(windowSize.innerWidth<800)
    {

      return (
        <div className='login_container'>
          <BackgroundImage className ="background"/>
          <div className="login_content">
          <Header/>
          <form onSubmit={handleSubmit}>
          <div className="login_form-container flex column a-center j-center">
              <div className="login_form flex column a-center j-center">
                 <div className="login_title">
                    <img src={lipscombLogoWhiteMobile} alt="lipscomblogowhite" />
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
                     <button type="submit" className = "LogIn">Log In</button>
                     <button onClick={()=>navigate(props.login? "/login" : "/signup")} className = "signUp">
                       {props.login ? "Log In" : "Create an account"}
                      </button>
                      <p  className="or">or</p>
                      
                      <button className='google_button' id='google_button' onClick={signInWithGoogle}><b id='text'>Log in with Google</b></button>
                 </div>
              </div>
          </div>
          </form>
          </div>
        </div>
        );
    }
    else
    {
      return (
        <div className='login_container'>
          <BackgroundImage className ="background"/>
          <div className="login_content">
          <Header/>
          <form onSubmit={handleSubmit}>
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
                     <button className="login_container_button" id="login" type="submit">Log In</button>
                     <button onClick={()=>navigate(props.login? "/login" : "/signup")} className="login_container_button" id="signup">
                       {props.login ? "Log In" : "Create an account"}
                      </button>
                      <p  className="or">or</p> 
                      <button className='google_button' onClick={signInWithGoogle}><b id='text'>Log in with Google</b></button>   
                 </div>
              </div>
          </div>
          </form>
          </div>
        </div>
        );


    }
    
}