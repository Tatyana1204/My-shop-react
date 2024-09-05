import React from 'react';
import './Search.css';


const Search = ({handleChange, search, filterProducts}) => {
    return (
        <div className="container">
            <div className="search-box">
                <input
                    value={search}
                    onChange={handleChange}
                    type="text"
                    placeholder="Поиск по объявлениям"

                />
                <button onClick={filterProducts} className="btn btn-primary search-btn">
                    <img className="search-btn-icon" src='/images/search.svg' alt="Поиск"/>
                    <span className="search-btn-text">Найти</span>
                </button>
            </div>
        </div>
    );
};

export default Search;