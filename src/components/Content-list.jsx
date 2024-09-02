import React from 'react';
import './Content-list.css'
import ContentListItem from "./Content-list-item";

const ContentList = () => {
    return (
        <div className="content-main_list">
            <ContentListItem name={'1'}/>
            <ContentListItem name={'2'}/>
            <ContentListItem name={'3'}/>
            <ContentListItem name={'4'}/>
            <ContentListItem name={'5'}/>
            <ContentListItem name={'6'}/>

        </div>
    );
};

export default ContentList;