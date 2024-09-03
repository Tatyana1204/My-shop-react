import React from 'react';
import  './ContentSide.css'
import SideItem from "./side-item/SideItem";
import Footer from "../footer/Footer";

const ContentSide = () => {
    return (
        <div className="content-side">
            <div className="content-side-title">
                <h3>Сервисы и услуги</h3>
            </div>
            <SideItem
                src={'/images/delivery-icon.svg'}
                sideText='Доставка'
                description ='Проверка при получении и возможность бесплатно вернуть товар'
            />
            <SideItem
                src={'/images/car-icon.svg'}
                sideText='Автотека'
                description ='Отчёт с историей авто: пробег, владельцы, сведения о залоге, ДТП и ремонтах'
            />
            <SideItem
                src={'/images/home-icon.svg'}
                sideText='Онлайн-бронирование жилья'
                description ='Посуточная аренда квартир и домов: большой выбор вариантов для поездок по России'
            />
            <Footer/>
            </div>
    );
};

export default ContentSide;