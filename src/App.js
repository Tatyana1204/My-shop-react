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
                    <Route path='src/components/main/ContentMain' element={<ContentMain/>}/>
                    <Route path='src/components/product-card/productCard' element={<ProductCard/>}/>
                    <Route path='*' element={<ContentMain/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
