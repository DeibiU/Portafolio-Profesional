import React from 'react';
import Icon1 from '../../assets/icon1.png'; //better to rename this to UIDesign or the object illustrated
import Icon2 from '../../assets/icon2.png';
import Icon3 from '../../assets/icon3.png';
import './skillset.css';

const Skillset = () => {
    return (
        <section id='skillset'>
            <span className="skillStatement"> My Skills? Glad you asked. </span>
            <span className="skillComment"> I have an extense array of skills, which vary radically from each other <br/>in order to excel in as many fields and situations as possible. </span>
            <div className="skillBars">
                <div className='skillBar'>
                    <img src={Icon1} alt="Skill1" className="skillImg" style= {{width:75}}/> 
                    <div className='skillBarText'>
                        <h2>Skill #1</h2>
                        <p>I can speak, read, and write advanced English, Spanish, French, and intermediate Japanese.</p>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={Icon2} alt="Skill2" className="skillImg" style= {{width:75}}/>
                    <div className='skillBarText'>
                        <h2>Skill #2</h2>
                        <p>I have experience working with Java, Html, Css, TypeScript, JavaScript, C#, and C++.</p>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={Icon3} alt="Skill3" className="skillImg" style= {{width:75}}/>
                    <div className='skillBarText'>
                        <h2>Skill #3</h2>
                        <p>I have learnt the skill of problem solving and flexibility, specially when working with a team.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skillset;