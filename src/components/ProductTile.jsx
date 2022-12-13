import React from 'react';
import { useNavigate } from 'react-router-dom';
import Helper from '../utils/helpers';

const ProductTile = ({ item }) => {
    const navigate = useNavigate();
    const imgURL = Helper.getImageURL(item.price);

    return (
        <div className='item-wrapper'>
            <div className='item-img'>
                <img src={imgURL} alt='product' onClick={() => navigate(`/product/${item.slug}`)} />
            </div>
            <div className='item-title'>{item.title.charAt(0).toUpperCase() + item.title.slice(1)}</div>
            <div className='item-price'><span>$</span>{item.price.toFixed(2)}</div>
        </div>
    )
};

export default ProductTile;
