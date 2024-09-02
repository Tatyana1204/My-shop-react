import React from 'react';
import './Content-box.css';
import ContentMain from "./Content-main";
import ContentSide from "./Content-side";

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