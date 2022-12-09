import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/Category.css';

const Category = () => {
    const params = useParams();
    const categoryId = params.id.toUpperCase();

    return (
        <div className="category container">
            <h1>{categoryId}</h1>
        </div>
    )
};

export default Category;