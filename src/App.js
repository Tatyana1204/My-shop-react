import './App.css'
import React from "react";
import PageWrapper from "./components/page-wrapper/PageWrapper";
import {Route, Routes} from "react-router-dom";
import ContentMain from "./components/main/ContentMain";
import ProductCard from "./components/product-card/productCard";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<PageWrapper/>}>
                    <Route path='/items' element={<ContentMain/>}/>
                    <Route path='items/:id' element={<ProductCard/>}/>
                    <Route path='*' element={<ContentMain/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
