import React from 'react';

const ContentListItem = ({name, props}) => {
    return (
        <div className="content-main_list-item">
            <img className="content-main_list-item__img" src={props.img} alt={name}/>
            <span className='content-main_list-item__name'>{props.name}</span>
            <span className='content-main_list-item__price'>{props.price}</span>
            <span className='gray-text'>{props.location}</span>
            <span className='gray-text'>{props.date}</span>
        </div>
    );
};

export default ContentListItem;