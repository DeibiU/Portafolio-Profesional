import React from 'react';
/*import { Link } from 'react-scroll';*/
import bg from '../../assets/StartBGPic.png';
/*import interestedImg from '../../assets/interested.jpg';*/
import './start.css';

const Start = ()=> {
    return (
        <section id="start">
            <div className="startContent">
              <span className="greeting">Nice to meet you!</span> 
              <span className="startText">I am <span className="startName">David</span> <br /> Software engineer.</span>
              <p className="startParragraph"> I am many things, can do many things. And done right. </p>
              {/*<Link><button className="btn"><img src={interestedImg} alt="Interested i see you are MMMmmm" className="btnImg"/>Intrested?</button></Link>*/}
            </div>
            <img src={bg} alt="Profile" className="bg" />   
        </section>
    )
}

export default Start;