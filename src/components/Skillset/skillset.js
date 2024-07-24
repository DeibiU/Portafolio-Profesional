import React from 'react';
import Icon1 from '../../assets/icon1.png'; //better to rename this to UIDesign or the object illustrated
import Icon2 from '../../assets/icon2.png';
import Icon3 from '../../assets/icon3.png';
import './skillset.css';
import { useTranslation } from 'react-i18next';

const Skillset = () => {
    const [t, i18n] = useTranslation("global");

    return (
        <section id='skillset'>
            <span className="skillStatement"> {t("skillset.title")}. </span>
            <span className="skillComment"> {t("skillset.subtitle")}. </span>
            <div className="skillBars">
                <div className='skillBar'>
                    <img src={Icon1} alt="Skill1" className="skillImg" style= {{width:75}}/> 
                    <div className='skillBarText'>
                        <h2>{t("skillset.skill")} #1</h2>
                        <p>{t("skillset.skill1")}.</p>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={Icon2} alt="Skill2" className="skillImg" style= {{width:75}}/>
                    <div className='skillBarText'>
                        <h2>{t("skillset.skill")} #2</h2>
                        <p>{t("skillset.skill2")}.</p>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={Icon3} alt="Skill3" className="skillImg" style= {{width:75}}/>
                    <div className='skillBarText'>
                        <h2>{t("skillset.skill")} #3</h2>
                        <p>{t("skillset.skill3")}.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skillset;