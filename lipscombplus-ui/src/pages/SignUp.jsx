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
  return <div className='signup_container'>
    <BackgroundImage/>
    <div className="content">
    <div className="body flex column a-center j-center">
        <form onSubmit={handleSubmit}>
        <div className='lipscomblogo'>
            <img src={lipscombLogoWhite} alt="lipscomblogowhite" />
        </div>
        
        <div className="form">
            <div className='divForm'>
                    <h4>Full Name</h4>
                    <input
                        type="text"
                        className='fullname' 
                        required='required'
                    />

                    <h4>Email</h4>
                    <input 
                        type="email"  
                        name='email' 
                        required='required'
                        value={formValues.email} 
                        onChange={(e)=>
                        setFormValues({
                            ...formValues,
                            [e.target.name]: e.target.value,
                        })
                    }
                    />          
            </div>
        
            <div>
                    <h4>Password</h4>
                    <input 
                        type="password" 
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

                    <h4>Confirm Password</h4>
                    <input
                        type="password"
                        className='confirmpassword' 
                        required='required'                  
                    />                
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
                                required='required'
                                className='signup_fullname' 
                            />

                            <h4>Email</h4>
                            <input 
                                type="email"  
                                name='email' 
                                value={formValues.email} 
                                required='required'
                                onChange={(e)=>
                                setFormValues({
                                    ...formValues,
                                    [e.target.name]: e.target.value,
                                })
                            }
                            />          
                    </div>
                
                    <div>
                            <h4>Password</h4>
                            <input 
                                type="password" 
                                name='password' 
                                value={formValues.password} 
                                required='required'
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
                                required='required'
                                className='signup_confirmpassword'
                                
                                                    
                            />                
                    </div>
                </div>
               <button type="submit" onClick={handleSignIn} className="signup_create_account">Create Account</button> 

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