import React from 'react';
import Portfolio1 from '../../assets/ReactPortfolio.png';
import Portfolio2 from '../../assets/Proyecto-Est1.png';
import Portfolio3 from '../../assets/Presentation1.gif';
import './portfolio.css';
import { useTranslation } from 'react-i18next';

const Portfolio = () => {
    const [t, i18n] = useTranslation("global");

    return (
        <section id = 'portfolio'>
            <h2 className="portfolioTitle">{t("portfolio.title")}</h2>
            <span className="portfolioDescription">{t("portfolio.subtitle")}.</span>
            <div className="portfolioImages">
                <h3>{t("portfolio.port1")}.</h3>
                <img src={Portfolio1} alt="" className="portfolioImage" />
                <h3>{t("portfolio.port2")}.</h3>
                <img src={Portfolio2} alt="" className="portfolioImage" />
                <h3>{t("portfolio.port3")}.</h3>
                <img src={Portfolio3} alt="" className="portfolioImage" />
            </div>
            <a href="https://github.com/DeibiU"><button className="portfolioBtn">{t("portfolio.button")}!</button></a>
        </section>
    );
}

export default Portfolio;