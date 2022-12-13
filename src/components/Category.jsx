import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/Category.css';
import storerestAPI from '../api/storerestapi';

import ProductTile from './ProductTile';

const Category = () => {
    const params = useParams();
    const [category, setCategory] = useState({});
    const [isLoading, setLoading] = useState(true);

    async function getCategory(cid) {
        const res = await storerestAPI.get('categories/' + cid);

        setCategory(res.data.data);
        setLoading(false);
    };

    useEffect(() => {
        console.log(category.name);
        getCategory(params.cid);
    }, [category]); // eslint-disable-line

    useEffect(() => {
        console.log('cleaned useEffect category cash');
    }, []); // eslint-disable-line

    // let products = [];

    // if (category.hasOwnProperty('products')) {
    //     category.products.forEach(product => {
    //         products.push(product);
    //     });

    // }

    return (
        <div className="category container">
            <h1>{category.name}</h1>
            <div className='items-list'>
                {
                    isLoading
                        ? <p>LOADING.........</p>
                        :
                    category.products.map((product, index) => {
                        return <ProductTile item={product} key={index}/>
                    })
                }
            </div>
        </div>
    )
};

export default Category;