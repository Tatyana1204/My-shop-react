import React, {useState} from 'react';
import {Link} from "react-router-dom";
import './productAdd.css';
import {useDispatch} from "react-redux";
import {addProduct} from "../../store/cardsSlice";

const ProductAdd = () => {
    const formatDate = () => {
        const date = new Date();
        const yyyy = date.getFullYear();
        let mm = date.getMonth() + 1; // Months start at 0!
        let dd = date.getDate();

        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;

        return dd + '.' + mm + '.' + yyyy;
    }
    const [newProduct, setNewProduct] = useState({
        id: Date.now(),
        img: '',
        name: '',
        price: 0,
        location: '',
        date: formatDate(),
        phone: '',
        description: ''
    });

    const dispatch = useDispatch();

    const handleSubmit = () => {
        dispatch(addProduct(newProduct));
        setNewProduct({
            id: Date.now(),
            img: '',
            name: '',
            price: 0,
            location: '',
            date: formatDate(),
            phone: '',
            description: ''
        });
    }
    return (
        <div className='content-main'>
            <div className='product-add-header'>
                <h1>Подать объявление</h1>
                <Link to='/items'>
                    <button className='btn btn-primary'>Отменить</button>
                </Link>
            </div>
            <div className='form-container'>
                <div className='label'>
                    <label>Название: </label>
                    <input
                        type='text'
                        name='name'
                        placeholder='Котик'
                        value={newProduct.name}
                        onChange={event => setNewProduct({...newProduct, [event.target.name]: event.target.value})}
                    />
                </div>
                <div className='label'>
                    <label>Ссылка на изображение: </label>
                    <input
                        type="text"
                        name="img"
                        multiple accept="image/*,image/jpeg"
                        value={newProduct.img}
                        onChange={event => setNewProduct({...newProduct, [event.target.name]: event.target.value})}
                    />
                </div>
                <div className='label'>
                    <label>Цена: </label>
                    <input
                        type='number'
                        placeholder='100 руб.'
                        name='price'
                        value={newProduct.price}
                        onChange={event => setNewProduct({...newProduct, [event.target.name]: event.target.value})}
                    />
                </div>
                <div className='label'>
                    <label> Номер телефона: </label>
                    <input
                        type='tel'
                        placeholder='8(900)000-00-00'
                        name='phone'
                        value={newProduct.phone}
                        onChange={event => setNewProduct({...newProduct, [event.target.name]: event.target.value})}
                    />
                </div>
                <div className='label'>
                    <label> Расположение: </label>
                    <input
                        type='text'
                        placeholder='St. Petersburg'
                        name='location'
                        value={newProduct.location}
                        onChange={event => setNewProduct({...newProduct, [event.target.name]: event.target.value})}
                    />
                </div>
                <div className='label'>
                    <label> Описание: </label>
                    <textarea
                        placeholder='Что-то о товаре'
                        name='description'
                        value={newProduct.description}
                        onChange={event => setNewProduct({...newProduct, [event.target.name]: event.target.value})}
                    />
                </div>
                <Link to='/items'>
                    <button className='btn btn-primary' onClick={handleSubmit}>Подать объявление</button>
                </Link>
            </div>
        </div>
    );
};

export default ProductAdd;