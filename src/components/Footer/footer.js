import { getElementError } from '@testing-library/react';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {

  const [t, i18n] = useTranslation("global");
  const [language, setlanguage] = useState(0);

  /*const selectLanguage= (lang) => {
    i18n.changeLanguage(lang);
  }

  function languageChange () {
    const choice = document.getElementById("lang").val(data);

    i18n.changeLanguage(choice);
  }*/

  return (
    <footer className='footer'>
      <p>2024 David Huertas.</p>
      <div>
        <label>{t("footer.label")}:</label>
        <select name="languages" id='lang' value={language} onChange={(e => i18n.changeLanguage(e.target.value))}>
          <option value="eng" selected>English</option>
          <option value="esp">Español</option>
        </select>
      </div>
    </footer>
  );
}

export default Footer