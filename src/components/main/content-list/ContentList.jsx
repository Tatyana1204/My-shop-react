import React from 'react';
import './ContentList.css'
import ContentListItem from "./list-item/Content-list-item";

const ContentList = () => {

    const cards = [
        {id: 1, img: '/images/cat.jpeg', name: 'Super-cat', price : '10 000 pуб.' , location:'St. Petersburg', date:'03.09.2024' },
        {id: 2, img: '/images/cat.jpeg', name: 'Super-cat', price : '10 000 pуб.' , location:'St. Petersburg', date:'03.09.2024' },
        {id: 3, img: '/images/cat.jpeg', name: 'Super-cat', price : '10 000 pуб.' , location:'St. Petersburg', date:'03.09.2024' },
        {id: 4, img: '/images/cat.jpeg', name: 'Super-cat', price : '10 000 pуб.' , location:'St. Petersburg', date:'03.09.2024' },
        {id: 5, img: '/images/cat.jpeg', name: 'Super-cat', price : '10 000 pуб.' , location:'St. Petersburg', date:'03.09.2024' },
        {id: 6, img: '/images/cat.jpeg', name: 'Super-cat', price : '10 000 pуб.' , location:'St. Petersburg', date:'03.09.2024' },
   ];
    return (
        <div className="content-main_list">
            {cards.map((item, index) =>
            <ContentListItem props={item}  key={item.id} />
            )};
        </div>
    );
};

export default ContentList;