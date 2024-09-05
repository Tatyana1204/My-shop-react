import React from 'react';
import ContentList from "./content-list/ContentList";

const ContentMain = ({cards}) => {
    return (
        <div className="content-main">
            <h2 className="content-main_title">Рекомендации для вас</h2>
            <ContentList cards={cards}/>
        </div>
    );
};

export default ContentMain;