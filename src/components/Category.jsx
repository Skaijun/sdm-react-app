import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/Category.css';
import storerestAPI from '../api/storerestapi';

import ProductTile from './ProductTile';

const Category = () => {
    const [category, setCategory] = useState({});
    const params = useParams();

    const getCategory = async (cid) => {
        if (cid) {
            const res = await storerestAPI.get('categories/' + cid);
            setCategory(res.data.data);
        }
        return true;
    };

    useEffect(() => {
        getCategory(params.cid);
    }, [category]); // eslint-disable-line

    useEffect(() => {
        console.log('cleaned useEffect category cash');
    }, []); // eslint-disable-line

    let products = [];

    if (category.hasOwnProperty('products')) {
        category.products.forEach(product => {
            products.push(product);
        });

    }

    return (
        <div className="category container">
            <h1>{category.name}</h1>
            {
                products.map((product, index) => {
                    return <ProductTile item={product} key={index}/>
                })
            }
        </div>
    )
};

export default Category;