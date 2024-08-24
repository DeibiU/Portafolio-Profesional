import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';
import bg from '../../assets/StartBGPic.png';
import docImg from '../../assets/docImg.png';
import './start.css';

const Start = ()=> {
    const [t, i18n] = useTranslation("global");

    return (
        <section id="start">
            <div className="startContent">
              <span className="greeting">{t("start.greeting")}</span> 
              <span className="startText">{t("start.intro")} <span className="startName">David</span> <br /> {t("start.carreer")}.</span>
              <p className="startParragraph"> {t("start.quote")}. </p>
              {<Link><button className="btn"><img src={docImg} alt="Download CV" className="btnImg"/>{t("start.cv")}?</button></Link>}
            </div>
            <img src={bg} alt="Profile" className="bg" />   
        </section>
    )
}

export default Start;