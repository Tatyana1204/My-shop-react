import {Link, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import './productCard.css';


const ProductCard = () => {
    const id = Number(useParams().id);
    const props = useSelector((state) => state.cards.cards);
    const product = props.find(product => product.id === id);
    const showPhone = () => {
        const phone = document.querySelector('.phone');
        phone.style.display = 'block';
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
                        <span className='product-name'>{product.price}</span>
                        <button className="btn btn-primary" onClick={showPhone}>Показать телефон</button>
                        <span className='phone'>{product.phone}</span>
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