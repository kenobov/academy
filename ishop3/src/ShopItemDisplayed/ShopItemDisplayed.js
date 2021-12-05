import React from 'react';
import './ShopItemDisplayed.scss';

// Это хардкор для изображений, который в базе хранились бы абсолютными путями на сервер
import image from '../../assets/img/item1.jpg';
import PropTypes from "prop-types";

export default class ShopItemDisplayed extends React.Component {

    render() {
        const {item, callback} = this.props;
        const {id, name, img, price, store, isNew, isPopular} = item;

        let htmlBadges = [];
        if(isNew){
            htmlBadges.push(<div key={`BadgeNew${id}`} className="Badge New">Новинка</div>);
        }
        if(isPopular){
            htmlBadges.push(<div key={`BadgePopular${id}`} className="Badge Popular">Популярный</div>);
        }

        return (
            <div className="ShopItemDisplayed">
                <div className="Badges">{htmlBadges}</div>
                <div className="Image">
                    <img src={image} alt="name" />
                </div>
                <div className="Name">
                    <h3>
                        {name}
                    </h3>
                </div>
                <p className="Store">
                    На складе осталось {store} шт
                </p>
                <div className="Price">
                    {price} ₽
                </div>
                <div className="Footer">
                    <div className="Edit">
                        <button type="button" className="Btn Modify" onClick={()=>callback(id,'edit')}>
                            Изменить
                        </button>
                    </div>
                    <div className="Close">
                        <button type="button" className="Btn Exit" onClick={()=>callback(0,'none')}>
                            Закрыть
                        </button>
                    </div>
                </div>
            </div>
        )

    }

}

ShopItemDisplayed.propTypes = {
    item: PropTypes.object.isRequired,
    callback: PropTypes.func.isRequired
}