import {Link, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import './productCard.css';
import {useState} from "react";


const ProductCard = () => {
    const id = Number(useParams().id);
    const props = useSelector((state) => state.cards.cards);
    const product = props.find(product => product.id === id);
    const [isShowPhoneNumber, setShowPhoneNumber] = useState(false);

    const showPhone = () => {
        (!isShowPhoneNumber) ? setShowPhoneNumber(true) : setShowPhoneNumber(false);
    }
    return (
        <div className="content-main">
            <div className="product-card">
                <div className="product-upper">
                    <div className="content product-right">
                        <span className='product-name'>{product.name}</span>
                        <img className="product-image" src={product.img} alt={product.name}/>
                    </div>
                    <div className="content">
                        <Link to='/items'><span className='gray-text'>Посмотреть еще объявления</span></Link>
                        <span className='product-name'>{product.price} руб.</span>
                        <button className="btn btn-primary" onClick={showPhone}>Показать телефон</button>
                        {isShowPhoneNumber && <span className='phone'>{product.phone}</span>}
                    </div>
                </div>
                <div className="product-description">
                    <p>{product.description}</p>
                    <span className='gray-text'>{product.location}</span>
                    <span className='gray-text'>{product.date}</span>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;