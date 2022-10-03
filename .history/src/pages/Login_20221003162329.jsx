import React from 'react'
import styled from 'styled-components'
import BackgroundImage from '../components/BackgroundImage';
import Header from '../components/Header';
import { useState } from 'react';
import { firebaseAuth } from '../utils/firebase-config';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export default function Login() {
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
    <BackgroundImage/>
    <div className="content">
    <Header/>
    <div className="body flex column a-center j-center">
        <div className="test flex column a-center j-center">
           <div className="title">
              <h3>Login</h3>
           </div>
           <div className="container flex column">
           <input 
                type="email" 
                placeholder='Email Address' 
                name='email' 
                value={formValues.email} 
                onChange={(e)=>
                setFormValues({
                    ...formValues,
                    [e.target.name]: e.target.value,
                })
             }
            />
            <input 
                type="password" 
                placeholder='Password' 
                name='password' 
                value={formValues.password} 
                onChange={(e)=>
                setFormValues({
                    ...formValues,
                    [e.target.name]: e.target.value,
                })
              }
             />
            <button onClick={handleLogIn}>Log In</button>
           </div>
        </div>
    </div>
    </div>

  </Container>
  );
}

const  Container = styled.div`
    
`;
