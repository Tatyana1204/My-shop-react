import React, {useState} from 'react';
import {useSelector} from "react-redux";
import './productCard.css';

const ProductCard = () => {
    const props = useSelector((state) => state.cards.cards);

    return (
        <div className="content-main">
            <div className="product-card">
                <div className="product-upper">
                    <div className="content product-right">
                        <span className='product-name'>{props[0].name}</span>
                        <img className="product-image" src={props[0].img} alt={props[0].name}/>
                    </div>
                    <div className="content">
                        <span className='product-name'>{props[0].price}</span>
                        <button className="btn btn-primary">Показать телефон</button>
                    </div>
                </div>
                <div className="product-description">
                    <p>{props[1].description}</p>
                    <span className='gray-text'>{props[1].location}</span>
                    <span className='gray-text'>{props[1].date}</span>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;