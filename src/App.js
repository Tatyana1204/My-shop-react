import './App.css'
import Header from "./components/Header";
import ContentBox from "./components/content-box";
import Search from "./components/Search";
import React, {useState} from "react";

function App() {
    const [search, setSearch] = useState("");
    const handleChange = (e) =>{
        console.log(e.target.value);
        setSearch(e.target.value);
    }
  return (
      <div className="App">
          <Header/>
          <Search value = {search} onChange={handleChange}/>
          {/*проверка*/}
          <span>{search}</span>
          <ContentBox/>
      </div>
  );
}

export default App;
