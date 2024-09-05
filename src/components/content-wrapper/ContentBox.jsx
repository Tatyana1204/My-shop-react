import React from 'react';
import './Content-box.css';
import ContentMain from "../main/ContentMain";
import ContentSide from "../side/ContentSide";

const ContentBox = () => {
    return (
        <div className="container">
            <div className="content-box">
                <ContentMain/>
                <ContentSide/>
            </div>
        </div>

    );
};

export default ContentBox;