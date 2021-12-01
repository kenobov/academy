const ShopItem = React.createClass({

    displayName: 'ShopItem',

    propTypes: {
        item: React.PropTypes.shape({
            id: React.PropTypes.number.isRequired,
            name: React.PropTypes.string.isRequired,
            img: React.PropTypes.string,
            price: React.PropTypes.number,
            store: React.PropTypes.number,
            rating: React.PropTypes.number,
            isNew: React.PropTypes.bool,
            isPopular: React.PropTypes.bool,
        })
    },

    render: function() {
        let htmlBadges = [], htmlStore = [];
        const {id, name, img, price, store, rating, isNew, isPopular} = this.props.item;

        if(isNew){
            htmlBadges.push(React.DOM.div({className: "ShopBadge ShopBadgeNew"}, "Новинка"));
        }
        if(isPopular){
            htmlBadges.push(React.DOM.div({className: "ShopBadge ShopBadgePopular"}, "Хит"));
        }

        return React.DOM.div({className: "ShopItem"},
            React.DOM.div({className: "ShopItemBadges"}, htmlBadges),
            React.DOM.a({href: "#", className: "ShopItemImage"},
                React.DOM.img({src: img, alt: name}),
            ),
            React.DOM.a({href: "#", className: "ShopItemName"},
                React.DOM.h3(null, name),
            ),
            React.DOM.p({className: "ShopItemStore"},
                `На складе осталось ${store} шт`
            ),
            React.DOM.div({className: "ShopItemFooter"},
                React.DOM.div({className: "ShopItemPrice"}, price + " ₽"),
                React.DOM.div({className: "ShopItemBuy"},
                    React.DOM.button({type: "button", className: "ShopItemBtn"}, "Купить"),
                ),
            ),

        )
    },

});