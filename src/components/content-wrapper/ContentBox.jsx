import React from 'react';
import './Content-box.css';
import ContentMain from "../main/ContentMain";
import ContentSide from "../side/ContentSide";
import ProductCard from "../product-card/productCard";

const ContentBox = () => {
    return (
        <div className="container">
            <div className="content-box">
                <ContentMain/>
                {/*<ProductCard/>*/}
                <ContentSide/>
            </div>
        </div>

    );
};

export default ContentBox;