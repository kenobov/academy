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
        }),
        isSelected: React.PropTypes.bool,
        onSelect: React.PropTypes.func,
        onRemove: React.PropTypes.func,
    },

    cbMark: function () {
        this.props.onSelect(this.props.item.id);
    },

    cbRemove: function (e) {
        e.stopPropagation();
        const {id, name} = this.props.item;
        if(confirm(`Вы действительно хотите удалить товар "${name}"?`)) this.props.onRemove(id);
    },

    render: function() {

        const {id, name, img, price, store, isNew, isPopular} = this.props.item;

        return React.DOM.tr({
                    className: `ShopItem ${this.props.isSelected ? 'marked' : null }`,
                    onClick: this.cbMark
            },
            React.DOM.td(null, id),
            React.DOM.td(null, name),
            React.DOM.td(null, price),
            React.DOM.td(null, store),
            React.DOM.td(null, img),
            React.DOM.td(null, isNew ? 'Да' : ''),
            React.DOM.td(null, isPopular ? 'Да' : ''),
            React.DOM.td(null,
                React.DOM.button({
                    className: "remove",
                    type: "button",
                    onClick: this.cbRemove
                }, 'Удалить')
            ),
        )
    },

});