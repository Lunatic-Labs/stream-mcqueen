import React from 'react'
import styled from 'styled-components'
import BackgroundImage from '../components/BackgroundImage';
import lipscombLogoWhite from '../assets/lipscombLogoWhiteResized.png';
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
  return <Container >
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
        
            <div>
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
                        type="text"
                        className='confirmpassword'                   
                    />                
            </div>
        </div>
        <button type="submit" onClick={handleSignIn} className="CreateAccount">Create Account</button> 

        <div className='BackToLogin'>
                    <h5>Already have an account?</h5>
        <button onClick={()=>navigate(props.signup? "/signup" : "/login")} className = "login">
                 {props.login ? "Log In" : "Log In"}
                </button>

        </div>
        
        </form>
    </div>
    </div>

  </Container>
}

const  Container = styled.div`
    position: relative;
    overflow-y: hidden;
    

    .content {
        position: absolute;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
        display: grid;
        grid-template-rows: 15vh 85vh;
        
    }


    .login{
        font-weight: bold;
        background-color: transparent;
        border: none;
        cursor: pointer;
        color: white;
        font-size: 15px;
        width:180px;
        position: relative;
        
    }

    .lipscomblogo{
        margin-top: 640px;
        margin-bottom: 70px;
    }

    input {
        padding: 1rem;
        width: 560px;
        height: 60px;
        background-color: #F8F8FF;
        border: none;
        padding: 1.5rem;
        font-size: 17px;
        margin: 10px;
        border-radius:9px;
        margin-bottom:45px;        
    }
   

    input:focus {
        outline: none;
    }
    
    h4{
        margin-left:15px;
    }

    .BackToLogin{
        display: inline;
        text-align:center;


    }

    .form {
      
        gap: 10px;    
        display: grid;
        grid-template-columns: auto auto;
        grid-template-rows: auto auto;
    }

        
    .body {
        gap: 1rem;
 
    }
    
  

    .CreateAccount{
        font-weight: bold;
        background-color: transparent;
        border: none;
        cursor: pointer;
        color: white;
        font-size: 17px;
        width:180px;
        position: relative;
        left: 510px;
        bottom:40px;
     }
    
`;
