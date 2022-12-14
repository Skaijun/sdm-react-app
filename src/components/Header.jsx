import React from 'react';
import { Link } from 'react-router-dom';  // eslint-disable-line
import '../styles/Header.css';
import LanguageSelect from './header/LanguageSelect';

const Header = ({ itemsInCart, language, languages, onLanguageSelect }) => {
    const toggleSelectDropdown = (isShown) => {
        let li = document.querySelector('.languageSelect');
        if (isShown) {
            li.style.display = 'block';
        } else {
            li.style.display = 'none';
        }
    };

    return (
        <div id='header'>
            <div id='scrollHeader'>
                <div id='headerTopBar'>
                    <ul className='container'>
                        <li className='flex-pull-right'>
                            <a href='https://www.google.com/'>{language.locale === 'en' ? 'Help' : 'Hilfe'}</a>
                        </li>
                        <li
                            onMouseEnter={() => toggleSelectDropdown(true)}
                            onMouseLeave={() => toggleSelectDropdown(false)}
                        >
                            <div className='languages'>
                                <span
                                    title={language.title}
                                    className='activeFlag'
                                >{language.text}</span>
                                <div className='languageSelect' style={{'display': 'none'}}>
                                {
                                    Object.keys(languages)
                                        .filter(key => languages[key].title !== language.title)
                                        .map((locale, index) => {
                                            return <LanguageSelect
                                                lang={languages[locale]}
                                                onLanguageSelect={onLanguageSelect}
                                                key={index}
                                            />
                                        })
                                }
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div id='headerTop' className='container'>
                    <Link id='logo' to='/'>
                        <img src='logo/header-logo.jpg' alt='logo' />
                    </Link>

                    <ul id='navigation'>
                        <li className='headerList level1'>
                            <Link className='headerLink' to='/category/womens-fashion'>WOMEN</Link>
                        </li>
                        <li className='headerList level1'>
                            <Link className='headerLink' to='/category/mens-fashion'>MENS</Link>
                        </li>
                        <li className='headerList level1'>
                            <Link className='headerLink' to='/category/computers'>COMPUTERS</Link>
                        </li>
                        <li className='headerList level1'>
                            <Link className='headerLink sale' to='/category/bags-and-shoes'>% SALE</Link>
                        </li>
                    </ul>

                    <div className='rightHeader'>
                        <div className='header-search'>
                            <form action='/' className='search-form' method='GET'>
                                <div className='search-container'>
                                    <img src='icons/search-icon.png' alt='search-icon' />
                                    <input
                                        className='textbox'
                                        maxLength='50'
                                        type='text'
                                        id='searchParam'
                                        placeholder='Search...'
                                        name='searchParam'
                                        autoComplete='off'
                                    />
                                </div>
                            </form>
                        </div>
                        <div className='header-account'>
                            <a href='/' title='Login'><img src='icons/user-icon.png' alt='login-icon' /></a>
                        </div>
                        <div className='header-wishlist'>
                            <a href='/' title='Wishlist'>
                                <span className='wishlist-icon-container'>
                                    <img src='icons/heart-empty-icon.png' alt='wishlist-icon' />
                                </span>
                            </a>
                        </div>
                        <div className='header-basket'>
                            { itemsInCart ?
                                <a href='/'>
                                    <span className='basket-icon-container'>
                                        <img src='icons/basket-empty-icon.png' alt='basket-icon' />
                                        <span className='basket-icon-count'>{itemsInCart}</span>
                                    </span>
                                </a>

                                :

                                <span className='basket-icon-container'>
                                    <img src='icons/basket-empty-icon.png' alt='basket-icon' />
                                </span>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Header;
