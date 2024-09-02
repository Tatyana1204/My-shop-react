import React from 'react';
import ContentList from "./Content-list";

const ContentMain = () => {
    return (
            <div className="content-main">
                    <h2 className="content-main_title">Рекомендации для вас</h2>
              <ContentList/>
            </div>
    );
};

export default ContentMain;