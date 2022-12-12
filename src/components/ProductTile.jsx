import React from 'react';

const ProductTile = ({ item }) => {
    let imgURL = '';

    // small improvement to have better UI visibility
    if (item.price < 40) {
        imgURL = '../products/fila_unwind_tee_gold_6450518_1143.jpg';
    } else if (item.price < 80) {
        imgURL = '../products/fila_aiken_tee_6601405_1118.jpg';
    } else if (item.price < 120) {
        imgURL = '../products/fila_laurens_tee_6601500_1165.jpg';
    } else {
        imgURL = '../products/fila_umed_long_sleeve_polo_6450298_1141.jpg';
    }

    return (
        <>
            <div><img src={imgURL} alt='product' /></div>
            <div>{item.title}</div>
            <div>{item.price}</div>
        </>
    )
};

export default ProductTile;
