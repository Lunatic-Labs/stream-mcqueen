import React from 'react'
import styled from 'styled-components'
import Logo from '../assets/Logo.png'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {FaPowerOff, FaSearch} from 'react-icons/fa'
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from '../utils/firebase-config';

export default function Navbar({isScrolled}) {

    const links=[
        { name:"Home", link: "/" },
        { name:"Events", link: "/events" },
        { name:"Concerts", link: "/concerts" },
        { name:"Sports", link: "/sports" },
        { name:"My List", link: "/mylist" },
    ]
    
    const navigate = useNavigate();

    onAuthStateChanged(firebaseAuth,(currentUser)=> {
        if(currentUser) navigate("/login"); //TODO: may want to add 2FA
    });

    const [showSearch, setShowSearch] = useState(false);
    const [inputHover, setInputHover] = useState(false);

  return (
   <Container>
        <nav className={`flex ${isScrolled ? "scrolled" : ""}`}>
            <div className="left flex a-center">
                <div className="brand flex a-center j-center">
                    <img src={Logo} alt="logo" />
                </div>
                <ul className='links flex'>
                {links.map(({name,link})=>{
                    return (
                        <li key={name}>
                            <Link to={link}>{name}</Link>
                        </li>  
                    )
                })}
            </ul>
            </div>
            <div className="right flex a_center">
                <div className={`search ${showSearch ? "show-search" : ""}`}>
                    <button 
                    onFocus={()=>setShowSearch(true)} 
                    onBlur={()=> {
                        if (!inputHover) setShowSearch(false)
                    }}
                    >
                    <FaSearch/>
                    </button>
                    <input type="text" placeholder='Search'
                    onMouseEnter={()=>setInputHover(true)}
                    onMouseLeave={()=>setInputHover(false)}
                    onBlur={()=>{
                        setShowSearch(false);
                        setInputHover(false);
                    }}
                    />
                </div>
                <button onClick={()=>{
                    alert("hello")
                    signOut(firebaseAuth)}}>
                    <FaPowerOff/>
                </button>
            </div>
        </nav>
   </Container>
  );
}

const Container = styled.div`
    .scrolled {
        background-color: black;
    }
    nav {
        position: sticky;
        top: 0;
        height: 6.5 rem;
        width: 100%;
        justify-content: space-between;
        position: fixed;
        z-index: 2;
        padding: 0 4rem;
        align-times: center;
        transition: 0.3s ease-in-out;
        .left {
            gap: 2rem;
            .brand {
                img {
                    height: 4rem;
                }
            }
            .links {
                list-style-type: none;
                gap: 2rem;
                li {
                    a {
                        color: white;
                        text-decoration: none;
                    }
                }
            }
        }
        .right {
            gap: 1rem;
            button {
                background-color: transparent;
                border: none;
                cursor: pointer;
                &:focus {
                    outline: none;
                }
                svg {
                    color: #F4AA00;
                    font-size: 1.2rem;
                }
            }
            .search {
                display: flex;
                gap: 0.4;
                align-items: center;
                justify-content: center;
                padding: 0.2 rem;
                padding-left: 0.5rem;
                button {
                    background-color: transparent;
                    svg {
                        color: white;
                    }
                }
                input {
                    width: 0;
                    opacity: 0;
                    visibility: hidden;
                    transition: 0.3s ease-in-out;
                    background-color: transparent;
                    border: none;
                    color: white;
                    &:focus {
                        outline: none;
                    }
                }
            }
            .show-search {
                border: 1px solid white;
                background color: rgba(0,0,0,0.6);
                input {
                    width: 100%;
                    opacity: 1;
                    visibility: 0;
                    padding: 0.3 rem;
                }
            }
        )

        }
    }
`;