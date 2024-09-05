import {createSlice} from "@reduxjs/toolkit";

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
    },];

const cardsSlice = createSlice({
    name: "cards",
    initialState: {
        cards: cardsContent,

    },
    reducers: {
        filterProducts(state, action) {
            state.cards = cardsContent.filter((card) => card.name.toLowerCase().includes(action.payload.text.toLowerCase()))
        }
    }
})
export const {filterProducts} = cardsSlice.actions;
export default cardsSlice.reducer;