import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import './styles/App.css';

const langMapping = {
  en: {
      title: 'English',
      text: 'English',
      locale: 'en'
  },
  de: {
      title: 'Deutsch',
      text: 'Deutsch',
      locale: 'de'
  }
};

function App() {
  const locale = window.localStorage.getItem('locale');

  const [itemsInCart, setItemsInCart] = useState(0);
  const [languages, setLanguages] = useState(langMapping);
  const [language, setLanguage] = useState(locale ? languages[locale] : languages.en);

  const setLanguageOnSelect = (langObject) => {
    setLanguage(langObject);
    window.localStorage.setItem('locale', langObject.locale);
    window.location.reload(true);
}

  return (
    <div className='page'>
      <Header
        itemsInCart={itemsInCart}
        language={language}
        languages={languages}
        onLanguageSelect={setLanguageOnSelect} />
      <div className='container'>
        <h1>SDM React App 2022</h1>
      </div>
    </div>
  )
}

export default App;
