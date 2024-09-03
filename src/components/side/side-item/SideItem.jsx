import React from 'react';

const SideItem = ({src, description, sideText}) => {
    return (
        <div>
            <div className="content-side-box">
                <img className="" src={src} alt={sideText}/>
                <span className="content-side-text">{sideText}</span>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default SideItem;