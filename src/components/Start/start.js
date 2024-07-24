import React from 'react';
/*import { Link } from 'react-scroll';*/
import bg from '../../assets/StartBGPic.png';
/*import interestedImg from '../../assets/interested.jpg';*/
import './start.css';
import { useTranslation } from 'react-i18next';

const Start = ()=> {
    const [t, i18n] = useTranslation("global");

    return (
        <section id="start">
            <div className="startContent">
              <span className="greeting">{t("start.greeting")}</span> 
              <span className="startText">{t("start.intro")} <span className="startName">David</span> <br /> {t("start.carreer")}.</span>
              <p className="startParragraph"> {t("start.quote")}. </p>
              {/*<Link><button className="btn"><img src={interestedImg} alt="Interested i see you are MMMmmm" className="btnImg"/>Intrested?</button></Link>*/}
            </div>
            <img src={bg} alt="Profile" className="bg" />   
        </section>
    )
}

export default Start;