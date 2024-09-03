import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <span>© ООО «MyShop», 2014–2024</span>
            <a href="https://www.myshop.com" target="_blank" rel="noopener noreferrer">Политика конфиденциальности</a>
            <a href="https://www.myshop.com" target="_blank" rel="noopener noreferrer">Обработка данных</a>
        </div>
    );
};

export default Footer;