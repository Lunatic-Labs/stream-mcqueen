import React from 'react'
import '../stylepages/signup.css'
import BackgroundImage from '../components/BackgroundImage';
import lipscombLogoWhite from '../assets/lipscombLogoWhiteResizedMobile.png';
import { initializeApp } from 'firebase/app';
import { useState } from 'react';
import { firebaseAuth } from '../utils/firebase-config';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export default function SignUp(props) {
    /*const [showPassword, setShowPassword] = useState(false);*/
    const [formValues, setFormValues] = useState({
        email: "",
        password: "",
        confirmpassword: "",
        errorMessage: "Passwords do not match.",
    });
    const navigate = useNavigate()
    const handleSignIn = async () => {
        try {
            const {email, password, confirmpassword} = formValues;
            await createUserWithEmailAndPassword(firebaseAuth, email, password)
        } catch(err) {
            console.log(err)
        }
    };
    const [errorMessage, setErrorMessage] = useState('');
    const handleSubmit = event => {
        if (formValues.password == formValues.confirmpassword) {
            handleSignIn();
            event.preventDefault();
          }else if (formValues.password !== formValues.confirmpassword) {
            console.log("passwords do not match")
            setErrorMessage('Passwords do not match.');
          }
    }
    onAuthStateChanged(firebaseAuth,(currentUser)=> {
        if(currentUser) navigate("/"); //TODO: may want to add 2FA
    })
  return (
   <div className='signup_container'>
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
                        type='text'
                        required='required'
                        className='signup_fullname' 
                    />

                    <h4>Email</h4>
                    <input 
                        type='email'  
                        name='email'
                        required="required"
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
                        type='password'
                        name='password' 
                        required='required'
                        value={formValues.password} 
                        onChange={(e)=>
                        setFormValues({
                            ...formValues,
                            [e.target.name]: e.target.value,
                        })
                    }
                    />
                    <div className='confirm_password'>
                     <h4>Confirm Password</h4>
                    </div>
                     <input
                        type='password' 
                        required='required' 
                        name='confirmpassword' 
                        className='login_input'
                        value={formValues.confirmpassword} 
                        onChange={(e)=>
                        setFormValues({
                            ...formValues,
                            [e.target.name]: e.target.value,
                      })
                    }
                   />               
                </div>
                </div>
               <button type="submit" onClick={handleSignIn} className='signup_create_account'>Create Account</button>
                {errorMessage && <div className="error"> {errorMessage} </div>}
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
  );
}