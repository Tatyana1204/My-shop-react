import React, {useState} from 'react';
import Header from "../header/Header";
import Search from "../search/Search";
import ContentBox from "../content-wrapper/ContentBox";
import './PageWrapper.css'


const PageWrapper = (MainPage) => {
    const [search, setSearch] = useState("");
    const handleChange = (e) =>{
        console.log(e.target.value);
        setSearch(e.target.value);
    }
    return (
        <div className="page-wrapper">
            <Header/>
            <Search value = {search} onChange={handleChange}/>
            {/*проверка*/}
            <span>{search}</span>
            <ContentBox/>

        </div>
    );
};

export default PageWrapper;