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

    getInitialState: function () {
        return {
            list: this.props.shopItems
        }
    },

    cbRemoveItem: function (id) {
        this.setState(prevState => {
            return {
                list: [...prevState.list].filter(v => v.id !== id)
            }
        });
    },

    render: function() {

        let htmlShopItems = [];
        if(this.state.list.length > 0){
            this.state.list.forEach(item => {
               htmlShopItems.push(
                   React.createElement(ShopItem, {key: 'shopItem'+item.id, item, onRemove: this.cbRemoveItem})
               )
            });
        }else{
            htmlShopItems.push(
                React.createElement(NoData, {key: 'noShopItemsData'})
            )
        }

        return React.DOM.table( {className:'ShopComponentContent'},
            React.DOM.thead( {className:'ShopItems'},
                React.DOM.tr(null,
                    React.DOM.th(null, 'id'),
                    React.DOM.th(null, 'Наименование'),
                    React.DOM.th(null, 'Цена'),
                    React.DOM.th(null, 'Количество'),
                    React.DOM.th(null, 'Картинка'),
                    React.DOM.th(null, 'Новинка'),
                    React.DOM.th(null, 'Популярный'),
                    React.DOM.th(null, ''),
                )
            ),
            React.DOM.tbody( {className:'ShopItems'}, htmlShopItems ),

        );
    },

});

