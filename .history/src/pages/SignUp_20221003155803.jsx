import React from 'react'
import styled from 'styled-components'
import BackgroundImage from '../components/BackgroundImage';
import Header from '../components/Header';
import { initializeApp } from 'firebase/app';
import { useState } from 'react';
import { firebaseAuth } from '../utils/firebase-config';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
    const [showPassword, setShowPassword] = useState(false);
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

    onAuthStateChanged(firebaseAuth,(currentUser)=> {
        if(currentUser) navigate("/"); //TODO: may want to add 2FA
    })
  return <Container showPassword={showPassword}>
    <BackgroundImage/>
    <div className="content">
    <Header/>
    <div className="body flex column a-center j-center">
        <div className="test flex column">
            <h1>Access Your Favorite Lipscomb Content</h1>
            <h4>Watch Anywhere. Lipscomb+ </h4>
            <h6>Ready to watch? Enter your email to create your account!</h6>
        </div>
        <div className="form">
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
            {showPassword && (
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
                    />)
            }
            {!showPassword && 
                    (<button onClick={()=>setShowPassword(true)}>Sign Up</button>)
            }
        </div>
        <button onClick={handleSignIn}>Sign Up</button>
    </div>
    </div>

  </Container>
}

const  Container = styled.div`
    position: relative;
    .content {
        position: absolute;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
        display: grid;
        grid-template-rows: 15vh 85vh;
        .body {
            gap: 1rem;
            .text {
                gap: 1rem;
                text-align: center;
                font-size: 2rem;
                h1 {
                    padding: 0 25rem;
                }
            }
            .form {
                display: grid;
                grid-template-columns: ${({showPassword})=>showPassword ?"1fr 1fr": "2fr 1fr"};
                width: 40%;
                input {
                    color: black;
                    border: none;
                    padding: 1.5rem;
                    font-size: 1.2rem;
                    border: 1px solid black;
                    &:focus {
                        outline: none;
                    }
                }
            }
            button {
                padding: 0.5 rem 1rem;
                background-color: #F3AA02;
                border: none;
                cursor: pointer;
                color: white;
                font-weight: bolder;
                font-size: 1.05 rem;
            }
        }
        button {
            padding: 0.5 rem 1rem;
            background-color: #F3AA02;
            border: none;
            cursor: pointer;
            color: white;
            border-radius: 0.2 rem;
            font-weight: bolder;
            font-size: 1.05 rem;
        }
    }
`;
