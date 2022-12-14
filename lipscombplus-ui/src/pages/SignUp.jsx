import React from 'react'
import '../stylepages/signup.css'
import BackgroundImage from '../components/BackgroundImage';
import lipscombLogoWhiteMobile from '../assets/lipscombLogoWhiteResizedMobile.png';
import lipscombLogoWhite from '../assets/lipscombLogoWhiteResized.png';
import { initializeApp } from 'firebase/app';
import { useState, useEffect } from 'react';
import { firebaseAuth } from '../utils/firebase-config';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { signInWithGoogle } from "../utils/firebase-config";
export default function SignUp(props) {
    /*const [showPassword, setShowPassword] = useState(false);*/
    const [formValues, setFormValues] = useState({
        email: "",
        password: "",
    });
    const navigate = useNavigate()
    const handleSignIn = async () => {
        try {
            const {email, password} = formValues;
            await createUserWithEmailAndPassword(firebaseAuth, email, password)
        } catch(err) {
            console.log(err)
        }
    };
    const handleSubmit = event => {
        handleSignIn();
        event.preventDefault();
    }
    onAuthStateChanged(firebaseAuth,(currentUser)=> {
        if(currentUser) navigate("/"); //TODO: may want to add 2FA
    })
    ////////////////////////////////////////////////////////////////////////////////////// This code checks for mobile device
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
//////////////////////////////////////////////////////////////////////////////////////
if(windowSize.innerWidth<800)
{
  return <div className='signup_container'>
    <BackgroundImage/>
    <div className="signup_content">
            <div className="signup_body flex column a-center j-center">
                <form onSubmit={handleSubmit}>
                <div className='signup_lipscomblogo'>
                    <img src={lipscombLogoWhiteMobile} alt="lipscomblogowhite" />
                </div>
                <div className="signup_form">
                    <div className='signup_divForm'>
                            <h4>Full Name</h4>
                            <input
                                type="text"
                                className='signup_fullname'
                            />
                            <h4>Email</h4>
                            <input
                                type="email"
                                name='email'
                                value={formValues.email}
                                onChange={(e)=>
                                setFormValues({
                                    ...formValues,
                                    [e.target.name]: e.target.value,
                                })
                            }
                            />
                    </div>
                    <div className='signup_divForm'>
                            <h4>Password</h4>
                            <input
                                type="password"
                                name='password'
                                value={formValues.password}
                                onChange={(e)=>
                                setFormValues({
                                    ...formValues,
                                    [e.target.name]: e.target.value,
                                })
                            }
                            />
                            <h4>Confirm Password</h4>
                            <input
                                type="password"
                                className='signup_confirmpassword'
                            />
                    </div>
                </div>
               <button type="submit" onClick={handleSignIn} className="signup_create_account">Create Account</button>
               <p  className="or">or</p>
                <button className='google_button' id='google_button' onClick={signInWithGoogle}><b id='text'>Log in with Google</b></button>
                <div className='signup_back_to_login'>
                        <h5>Already have an account?</h5>
                        <button onClick={()=>navigate(props.signup? "/signup" : "/login")} className = "signup_login">
                            {props.login ? "Log In" : "Log In"}
                        </button>
                </div>
             </form>
            </div>
    </div>
  </div>
}
else
{
    return <div className='signup_container'>
    <BackgroundImage/>
    <div className="signup_content">
            <div className="signup_body flex column a-center j-center">
                <form onSubmit={handleSubmit}>
                <div className='signup_lipscomblogo'>
                    <img src={lipscombLogoWhite} alt="lipscomblogowhite" />
                </div>
                <div className="signup_form">
                    <div className='signup_divForm'>
                            <h4>Full Name</h4>
                            <input
                                type="text"
                                className='signup_fullname'
                            />
                            <h4>Email</h4>
                            <input
                                type="email"
                                name='email'
                                value={formValues.email}
                                onChange={(e)=>
                                setFormValues({
                                    ...formValues,
                                    [e.target.name]: e.target.value,
                                })
                            }
                            />
                    </div>
                    <div className='signup_divForm'>
                            <h4>Password</h4>
                            <input
                                type="password"
                                name='password'
                                value={formValues.password}
                                onChange={(e)=>
                                setFormValues({
                                    ...formValues,
                                    [e.target.name]: e.target.value,
                                })
                            }
                            />
                            <h4>Confirm Password</h4>
                            <input
                                type="password"
                                className='signup_confirmpassword'
                            />
                    </div>
                </div>
                <div className='signup_buttons'>
                <div className='signup_back_to_login'>
                        <button type="submit" onClick={handleSignIn} className="signup_create_account">Create Account</button>
                        <h5 id='text1'>Already have an account?</h5>
                        <button onClick={()=>navigate(props.signup? "/signup" : "/login")} className = "signup_login">
                            {props.login ? "Log In" : "Log In"}
                        </button>
                    </div>
                    <div className="signup_or_div">
                    <p  className="signup_or">or</p>
                    </div>
                    <div>
                        <button className='google_button' id='google_button' onClick={signInWithGoogle}><b id='text'>Sign Up with Google</b></button>
                    </div>
                </div>
             </form>
            </div>
    </div>
  </div>
}
}









