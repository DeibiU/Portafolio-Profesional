import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './footer.css';

const Footer = () => {

  const [t, i18n] = useTranslation("global");
  //const [language, setlanguage] = useState(0);
  const languageHandler = (event) => {const langValue = event.target.value; i18n.changeLanguage(langValue)};

  return (
    <footer className='footer'>
      <p>2024 David Huertas.</p>
      <div>
        <label>{t("footer.label")}:</label>
        <select name="languages" id='lang' onChange={languageHandler}>
          <option value="eng">English</option>
          <option value="esp">Español</option>
        </select>
      </div>
    </footer>
  );
}

export default Footer