import './App.css'
import Header from "./components/Header";
import ContentBox from "./components/content-box";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
        <Header/>
        <Search/>
        <ContentBox/>
    </div>
  );
}

export default App;
