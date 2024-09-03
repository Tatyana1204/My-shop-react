import React from 'react';
import './Search.css';


const Search = (props) => {
    return (
        <div className="container">
            <div className="search-box">
                <input
                    {...props}
                    type="text"
                    placeholder="Поиск по объявлениям"
                />
                <button className="btn btn-primary search-btn">
                    <img className="search-btn-icon" src='/images/search.svg' alt="Поиск"/>
                    <span className="search-btn-text">Найти</span>
                </button>
            </div>
        </div>
    );
};

export default Search;