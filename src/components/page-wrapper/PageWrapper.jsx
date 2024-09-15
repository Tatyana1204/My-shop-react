import Header from "../header/Header";
import Search from "../search/Search";
import ContentBox from "../content-wrapper/ContentBox";
import './PageWrapper.css'

const PageWrapper = () => {
    return (
        <div className="page-wrapper">
            <Header/>
            <Search/>
            <ContentBox/>
        </div>
    );
};

export default PageWrapper;