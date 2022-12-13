import React, { useState, useEffect } from 'react'; // eslint-disable-line
import { BrowserRouter, Link, Route, Routes, Switch } from 'react-router-dom';  // eslint-disable-line
import ProductDetail from './components/ProductDetail';
import Category from './components/Category';
import Header from './components/Header';
import Home from './components/Home';
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

  const [itemsInCart, setItemsInCart] = useState(0); // eslint-disable-line
  const [languages, setLanguages] = useState(langMapping); // eslint-disable-line
  const [language, setLanguage] = useState(locale ? languages[locale] : languages.en);

  const setLanguageOnSelect = (langObject) => {
    setLanguage(langObject);
    window.localStorage.setItem('locale', langObject.locale);
    window.location.reload(true);
  }

  return (
    <BrowserRouter>
      <div className='page'>
        <Header
          itemsInCart={itemsInCart}
          language={language}
          languages={languages}
          onLanguageSelect={setLanguageOnSelect}
        />
        <Routes>
          <Route exact path='/category/:cid' element={<Category />} />
          <Route exact path='/product/:pid' element={<ProductDetail />} />
          <Route exact path='/' element={<Home />}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
