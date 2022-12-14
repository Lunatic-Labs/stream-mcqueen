import React from 'react'
import '../stylecomponents/navbar.css';
import Logo from '../assets/lipscombLogoWhite.png'
import { Link, useNavigate} from 'react-router-dom';
import {FaPowerOff, FaSearch} from 'react-icons/fa'
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from '../utils/firebase-config';
import {useEffect, useState} from 'react';
import Sidebar from './Sidebar';





export default function Navbar({isScrolled}) {

    const links=[
        { name:"Chapels", link: "/chapels" },
        { name:"Events", link: "/events" },
        { name:"Concerts", link: "/concerts" },
        { name:"Sports", link: "/sports" },
        { name:"My List", link: "/mylist" },
    ]



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
    const navigate = useNavigate();

    onAuthStateChanged(firebaseAuth,(currentUser)=> {
        if(!currentUser) navigate("/login"); //TODO: may want to add 2FA
    });

    const [showSearch, setShowSearch] = useState(false);
    const [inputHover, setInputHover] = useState(false);
    
    if(getWindowSize().innerWidth <800)
    {
       
        return (
            <div className='navbar_container'>
                 <nav className={`navbar_flex ${isScrolled ? "scrolled" : ""}`}>
                 
                     <div className="navbar_left flex a-center">
                         <Sidebar />
                         
                     </div>
                     <div className="navbar_right flex a_center">
                         <div className={`navbar_search ${showSearch ? "show-search" : ""}`}>
                             <button className="search_button"
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
                             signOut(firebaseAuth)}}>
                             <FaPowerOff/>
                         </button>
                     </div>
                 </nav>
            </div>
           );
         

    }
    else
    {
        return (
        <>
        <div className='navbar_container'>
        <nav className={`navbar_flex ${isScrolled ? "scrolled" : ""}`}>
            <div className="navbar_left flex a-center">
                <div className="navbar_brand flex a-center j-center">
                    <a href='/'>
                    <img src={Logo} alt="logo" className='lipscombPlusLogo' />
                    </a>
                </div>
                <ul className='navbar_links flex'>
                {links.map(({name,link})=>{
                    return (
                        <li key={name}>
                            <Link to={link}>{name}</Link>
                        </li>  
                    )
                })}
            </ul>
            </div>
            <div className="navbar_right flex a_center">
                <div className={`navbar_search ${showSearch ? "show-search" : ""}`}>
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
                    signOut(firebaseAuth)}}>
                    <FaPowerOff/>
                </button>
            </div>
        </nav>
   </div>  
   </>
  );

}
}


