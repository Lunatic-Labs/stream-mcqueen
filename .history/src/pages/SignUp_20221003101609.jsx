import React from 'react'
import styled from 'styled-components'
import BackgroundImage from '../components/BackgroundImage';
import Header from '../components/Header';
import { initializeApp } from 'firebase/app';

export default function SignUp() {
  return <Container>
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
            <input type="email" placeholder='Email Address' name='email'/>
            <input type="password" placeholder='Password' name='password' />
            <button>Sign Up</button>
        </div>
        <button>Log In</button>
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
                border-radius: 0.2 rem;
                font-weight: bolder;
                font-size: 1.05 rem;
            }
        }
    }
`;
