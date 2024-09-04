import React, {useEffect, useState} from 'react';
import Header from "../header/Header";
import Search from "../search/Search";
import ContentBox from "../content-wrapper/ContentBox";
import './PageWrapper.css'


const PageWrapper = (MainPage) => {
    const cardsContent = [
        {
            id: 1,
            img: '/images/cat.jpeg',
            name: 'Super-cat 1',
            price: '10 000 pуб.',
            location: 'St. Petersburg',
            date: '03.09.2024'
        },
        {
            id: 2,
            img: '/images/cat.jpeg',
            name: 'Super 2',
            price: '10 000 pуб.',
            location: 'St. Petersburg',
            date: '03.09.2024'
        },
        {
            id: 3,
            img: '/images/cat.jpeg',
            name: 'Cat 3',
            price: '10 000 pуб.',
            location: 'St. Petersburg',
            date: '03.09.2024'
        },
        {
            id: 4,
            img: '/images/cat.jpeg',
            name: 'Super-cat new 4',
            price: '10 000 pуб.',
            location: 'St. Petersburg',
            date: '03.09.2024'
        },
        {
            id: 5,
            img: '/images/cat.jpeg',
            name: 'Super-cat new 5',
            price: '10 000 pуб.',
            location: 'St. Petersburg',
            date: '03.09.2024'
        },
        {
            id: 6,
            img: '/images/cat.jpeg',
            name: 'Super-cat old 6',
            price: '10 000 pуб.',
            location: 'St. Petersburg',
            date: '03.09.2024'
        },
    ];

    const [cards, setCards] = useState(cardsContent);
    const [search, setSearch] = useState('');

    const handleChange = (e) => {
        console.log(e.target.value);
        setSearch(e.target.value);
    }
    const filterProducts = (searchText, listOfProducts) => {
        if (!searchText) {
            return listOfProducts;
        }
        return listOfProducts.filter(({name}) => name.toLowerCase().includes(searchText.toLowerCase()));
    };
    useEffect(() => {
        const Debounce = setTimeout(() => {
            setCards(filterProducts(search, cardsContent));
        }, 400);
        return () => clearTimeout(Debounce);
    }, [search]);

    return (
        <div className="page-wrapper">
            <Header/>
            <Search filterProducts={filterProducts} search={search}
                    handleChange={(event) => setSearch(event.target.value)}/>
            <ContentBox cards={cards} setCards={setCards}/>

        </div>
    );
};

export default PageWrapper;