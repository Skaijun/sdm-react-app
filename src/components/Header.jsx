import React from 'react';
import '../styles/Header.css';

const Header = () => {
    const numOfItemsInCart = 3;

    return (
        <div id='header'>
            <div id='scrollHeader'>
                <div id='headerTopBar'>
                    <ul className='container'>
                        <li className='flex-pull-right'>
                            <a href='https://www.google.com/'>Help</a>
                        </li>
                        <li>
                            <div className='languages'>
                                <a
                                    title='English'
                                    className='activeFlag'
                                    href='/'
                                >English</a>
                                <div className='languageSelect' style={{'display': 'none'}}>
                                <a
                                    title='Deutsch'
                                    className='flag de'
                                    href='/'
                                >Deutsch</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div id='headerTop' className='container'>
                    <a id='logo' href='/'>
                        <img src='logo/header-logo.jpg' alt='logo' />
                    </a>

                    <ul id='navigation'>
                        <li className='headerList level1'><a className='headerLink' href='/'>WOMEN</a></li>
                        <li className='headerList level1'><a className='headerLink' href='/'>MENS</a></li>
                        <li className='headerList level1'><a className='headerLink' href='/'>KIDS</a></li>
                        <li className='headerList level1'><a className='headerLink' href='/'>FEATURED</a></li>
                        <li className='headerList level1'><a className='headerLink' href='/'>NEW</a></li>
                        <li className='headerList level1'><a className='headerLink sale' href='/'>% SALE</a></li>
                    </ul>

                    <div className='rightHeader'>
                        <div className='header-search'>
                            <form action='/' className='search-form' method='GET'>
                                <div className='search-container'>
                                    <img src='icons/search-icon.png' alt='search-icon' />
                                    <input
                                        className='textbox'
                                        maxlength='50'
                                        type='text'
                                        id='searchParam'
                                        placeholder='Search...'
                                        name='searchParam'
                                        autocomplete='off'
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
                            { numOfItemsInCart ?
                                <a href='/'>
                                    <span className='basket-icon-container'>
                                        <img src='icons/basket-empty-icon.png' alt='basket-icon' />
                                        <span className='basket-icon-count'>{numOfItemsInCart}</span>
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
