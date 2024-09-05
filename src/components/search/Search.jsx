import React, {useState} from 'react';
import './Search.css';
import {useDispatch} from "react-redux";
import {filterProducts} from "../../store/cardsSlice";


const Search = () => {
    const dispatch = useDispatch();
    const filterCards = () => {
        dispatch(filterProducts({text}));
    }
    const [text, setSearch] = useState('');
    return (
        <div className="container">
            <div className="search-box">
                <input
                    value={text}
                    onChange={(event) => setSearch(event.target.value)}
                    type="text"
                    placeholder="Поиск по объявлениям">
                </input>
                <button onClick={filterCards} className="btn btn-primary search-btn">
                    <img className="search-btn-icon" src='/images/search.svg' alt="Поиск"/>
                    <span className="search-btn-text">Найти</span>
                </button>
            </div>
        </div>
    );
};

export default Search;