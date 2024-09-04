import React from 'react';
import './ContentList.css'
import ContentListItem from "./list-item/Content-list-item";

const ContentList = ({cards}) => {
    if (cards.length < 1) {
        return (
            <div className="content-list">
                <span>К сожалению, по Вашему запросу ничего не нашлось:(</span>
            </div>
        )
    }
    return (
        <div className="content-main_list">
            {cards.map((item, index) =>
                <ContentListItem props={item} key={item.id}/>
            )};
        </div>
    );
};

export default ContentList;