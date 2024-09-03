import './App.css'
import Header from "./components/header/Header";
import ContentBox from "./components/content-wrapper/ContentBox";
import Search from "./components/search/Search";
import React, {useState} from "react";
import PageWrapper from "./components/page-wrapper/PageWrapper";

function App() {
  return (
      <div className="App">
          <PageWrapper/>
      </div>
  );
}

export default App;
