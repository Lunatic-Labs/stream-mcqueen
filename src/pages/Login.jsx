import React from 'react'
import styled from 'styled-components'
import BackgroundImage from '../components/BackgroundImage';
import Header from '../components/Header';
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
   <Container>
    <BackgroundImage className ="background"/>
    <div className="content">
    <Header/>
    <div className="form-container flex column a-center j-center">
        <div className="form flex column a-center j-center">
           <div className="title">
              <h1>LIPSCOMB +</h1>
           </div>
           <div className="Email">
              <h4 >Email</h4>
           </div>
           <div className="container flex column">
           <input 
                type="email" 
                placeholder='Email Address' 
                name='email' 
                className="input"
                value={formValues.email} 
                onChange={(e)=>
                setFormValues({
                    ...formValues,
                    [e.target.name]: e.target.value,
                })
             }
            />
            <div className="Password">
              <h4>Password</h4>
           </div>
            <input 
                type="password" 
                placeholder='Password' 
                name='password' 
                className="input"
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

  </Container>
  );
}

const  Container = styled.div`

    position: relative;
    overflow-y: hidden;
    
    .title{
      padding-right:5 ptx;
      text-align: center;
      margin-bottom:50px;
    }

    .input {
      padding: 1rem;
      width: 35rem;
      height: 3rem;
      background-color: #F8F8FF;
      margin: 1.3rem;
      border-style: hidden;
      border-radius: 9px;
      align: center;
    }
    
    h1{
      display: inline;
      font-family:Serif;
      letter-spacing: 1.5px;
      font-weight: 900;
      font-size: 90px;
      margin-down:10px;

    }
    .Email{
      position: relative;
      top 10px;
      left: -245px;
      font-radius: 5px;

    }
    .Password{
      position: relative;
      top 10px;
      left: 35px;

      font-radius: 5px;
    }
    
    .content {
      position: absolute;
      top: 0;
      left: 0;
      height: 100vh;
      width: 100vw;
      display: grid;
    }
     
    .form-container {
      height: 60vh;
    }
           
     button {
        font-weight: bold;
        padding: 5px 10px;
        margin:5px;
        background-color: transparent;
        border: none;
        cursor: pointer;
        color: white;
        border-radius: 5px;
        font-size: 15px;
        width:180px;
        position: relative;
        left: 205px;
      }
  `;


    

