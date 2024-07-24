import React, { useState } from 'react';
import { Link } from 'react-scroll';
import contactImg from '../../assets/contact.png';
import logo from '../../assets/Derby.png';
import barLogo from '../../assets/menuBars.png';
import './navbar.css';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [t, i18n] = useTranslation("global");
  
  return (
   <nav className="navbar">
    <img src={logo} alt="Logo" className='logo'/>
    <div className="desktopMenu">
        <Link activeClass='active' to= 'start' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">{t("navbar.start")}</Link>
        <Link activeClass='active' to= 'skillset' spy={true} smooth={true} offset={-75} duration={500} className="desktopMenuListItem">{t("navbar.about")}</Link>
        <Link activeClass='active' to= 'portfolio' spy={true} smooth={true} offset={-75} duration={500} className="desktopMenuListItem">{t("navbar.project")}</Link>
    </div>
    <button className="desktopMenuBtn" onClick={() => {
      document.getElementById('contact').scrollIntoView({block: "start", behavior: 'smooth'});
    }}>
        <img src={contactImg} alt="" className="desktopMenuImg" /> {t("navbar.contact")}
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