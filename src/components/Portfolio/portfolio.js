import React from 'react';
import Portfolio1 from '../../assets/portfolio-3.png';
import Portfolio2 from '../../assets/portfolio-4.png';
import Portfolio3 from '../../assets/Presentation1.gif';
import './portfolio.css';


const Portfolio = () => {
    return (
        <section id = 'portfolio'>
            <h2 className="portfolioTitle">Array of Projects</h2>
            <span className="portfolioDescription">Behold of my humble but honest contributions.</span>
            <div className="portfolioImages">
                <img src={Portfolio1} alt="" className="portfolioImage" />
                <img src={Portfolio2} alt="" className="portfolioImage" />
                <img src={Portfolio3} alt="" className="portfolioImage" />
            </div>
            <a href="https://github.com/DeibiU"><button className="portfolioBtn">See More!</button></a>
        </section>
    );
}

export default Portfolio;