import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import storerestAPI from '../api/storerestapi';
import Helper from '../utils/helpers';
import '../styles/ProductDetail.css';

const ProductDetail = () => {
    const params = useParams();
    const [product, setProduct] = useState({});
    const [isLoading, setLoading] = useState(true);

    async function getProduct(pid) {
        const res = await storerestAPI.get('products/' + pid);

        setProduct(res.data.data);
        setLoading(false);
    };

    let imgURL = Helper.getImageURL(product.price);

    useEffect(() => {
       getProduct(params.pid);
    }, []); // eslint-disable-line

    return (
        <div className='container'>
            {
                isLoading
                    ? <p>LOADING..........</p>
                    : <div className='product-detail'>
                        <div className='product-detail__img'>
                            <img src={imgURL} alt='product-detail__img' />
                        </div>
                        <div className='product-detail__info'>
                            <div className='item-cart'>
                                <div className='item-title'>
                                    {product.title.charAt(0).toUpperCase() + product.title.slice(1)}
                                </div>
                                <div className='item-description'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus nam rem nisi quae, doloremque dolorem sapiente quos, id aliquid incidunt temporibus perferendis harum placeat. Laborum tempora tempore eum similique facilis.
                                </div>
                                <div className='item-id'>
                                    {'id: ' + product.slug}
                                </div>
                                <div className='item-price'>
                                    <span>$</span>{product.price.toFixed(2)}
                                </div>
                            </div>
                            <div className='item-purchase'>
                                <div className='quantity'>
                                    <div className='quantity-container'>
                                        <button
                                            className='item-qt-decrease'
                                        >-</button>
                                        <input
                                            type='number'
                                            defaultValue='1'
                                            id='item-qt'
                                            maxLength={3}
                                            size='2'
                                        />
                                        <button
                                            className='item-qt-increase'
                                        >+</button>
                                    </div>
                                </div>
                                <button
                                    type='button'
                                    class='add-to-cart'
                                    title='ADD TO CART'
                                    value='ADD TO CART'
                                >ADD TO CART</button>
                            </div>
                        </div>
                      </div>
            }
        </div>
    )
}

export default ProductDetail;
