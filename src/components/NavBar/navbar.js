import React, { useState } from 'react';
import { Link } from 'react-scroll';
import contactImg from '../../assets/contact.png';
import logo from '../../assets/Derby.png';
import barLogo from '../../assets/menuBars.png';
import './navbar.css';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
   <nav className="navbar">
    <img src={logo} alt="Logo" className='logo'/>
    <div className="desktopMenu">
        <Link activeClass='active' to= 'start' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Start</Link>
        <Link activeClass='active' to= 'skillset' spy={true} smooth={true} offset={-75} duration={500} className="desktopMenuListItem">About</Link>
        <Link activeClass='active' to= 'portfolio' spy={true} smooth={true} offset={-75} duration={500} className="desktopMenuListItem">Projects</Link>
    </div>
    <button className="desktopMenuBtn" onClick={() => {
      document.getElementById('contact').scrollIntoView({block: "start", behavior: 'smooth'});
    }}>
        <img src={contactImg} alt="" className="desktopMenuImg" /> Contact Me!!
    </button>


    <img src={barLogo} alt="Menu" className='mobileMenuLogo' onClick={()=>setShowMenu(!showMenu)}/>
    <div className="mobileMenu" style={{display: showMenu? 'flex':'none'}}>
        <Link activeClass='active' to= 'start' spy={true} smooth={true} offset={-100} duration={500} className="mobileMenuListItem" onClick={()=>setShowMenu(false)}>Start</Link>
        <Link activeClass='active' to= 'skillset' spy={true} smooth={true} offset={-75} duration={500} className="mobileMenuListItem" onClick={()=>setShowMenu(false)}>About</Link>
        <Link activeClass='active' to= 'portfolio' spy={true} smooth={true} offset={-75} duration={500} className="mobileMenuListItem" onClick={()=>setShowMenu(false)}>Projects</Link>
        <Link activeClass='active' to= 'contact' spy={true} smooth={true} offset={-75} duration={500} className="mobileMenuListItem" onClick={()=>setShowMenu(false)}>Contact Me</Link>
    </div>
   </nav>
  )
}

export default Navbar