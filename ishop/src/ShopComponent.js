const ShopComponent = React.createClass({

    displayName: 'ShopComponent',

    propsTypes: {
        shopName: React.PropTypes.string,
        shopItems: React.PropTypes.arrayOf(
            React.PropTypes.shape({
                id: React.PropTypes.number.isRequired,
                name: React.PropTypes.string.isRequired,
                img: React.PropTypes.string,
                price: React.PropTypes.number,
                store: React.PropTypes.number,
                rating: React.PropTypes.number,
                isNew: React.PropTypes.bool,
                isPopular: React.PropTypes.bool,
            }).isRequired
        )
    },

    getDefaultProps: function() {
        return { shopName: "Интернет-магазин", shopItems: [] }
    },

    render: function() {

        const description = 'Рады приветствовать вас, наш дорогой посетитель, в хлебо-булочной сказке. Выбирайте все, что душе угодно!'

        let htmlShopItems = [];
        if(this.props.shopItems.length > 0){
            this.props.shopItems.forEach(item => {
               htmlShopItems.push(
                   React.createElement(ShopItem, {key: 'shopItem'+item.id, item})
               )
            });
        }else{
            htmlShopItems.push(
                React.createElement(NoData, {key: 'noShopItemsData'})
            )
        }

        return React.DOM.div( {className:'ShopComponentContent'},
            React.DOM.div({className:'ShopHead'},
                React.DOM.h1( {className:'ShopName'}, this.props.shopName ),
                React.DOM.p( {className:'ShopDescription'}, description ),
            ),
            React.DOM.div( {className:'ShopItems'}, htmlShopItems ),

        );
    },

});

