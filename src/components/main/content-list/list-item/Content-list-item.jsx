import React from 'react';
import {Link} from "react-router-dom";

const ContentListItem = ({name, props}) => {
    return (
        <div className="content-main_list-item">
            <Link to='/src/components/product-card/productCard'><img className="content-main_list-item__img"
                                                                     src={props.img} alt={name}/></Link>
            <span className='content-main_list-item__name'>{props.name}</span>
            <span className='content-main_list-item__price'>{props.price}</span>
            <span className='gray-text'>{props.location}</span>
            <span className='gray-text'>{props.date}</span>
        </div>
    );
};

export default ContentListItem;