import React from 'react';
import './Content-box.css';
import ContentSide from "../side/ContentSide";
import {Outlet} from "react-router-dom";


const ContentBox = () => {
    return (
        <div className="container">
            <div className="content-box">
                <Outlet/>
                <ContentSide/>
            </div>
        </div>

    );
};

export default ContentBox;