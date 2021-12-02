const FilterComponent = React.createClass({

    displayName: "FilterComponent",

    propTypes: {
        data: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
    },

    getInitialState: function () {
        return {
            list: this.props.data,
            checkbox: false,
            filter: ''
        }
    },

    cbOnCheckboxChange: function (e) {
        const isChecked = e.target.checked;
        const newList = this.props.data.map(v=>v).sort();
        this.setState({
            checkbox: isChecked,
            list: newList
        });
    },

    cbOnFilterChange: function (e) {
        const value = e.target.value;
        const newList = this.props.data.map(v=>v).filter(t => t.includes(value));
        console.log(newList)
        this.setState({
            filter: value,
            list: newList
        });
    },

    cbClear: function () {
        this.setState({
            list: this.props.data,
            filter: '',
            checkbox: false
        })
    },

    render: function () {

        const {filter, checkbox, list} = this.state;

        let i = 0, listHTML = list.length > 0
            ? data.map(el => React.DOM.li({key: i++}, el))
            : null;

        return React.DOM.div({className: 'container'},
            React.DOM.div({className: 'head'},
                React.DOM.input({type: 'checkbox', checked: checkbox, onClick: this.cbOnCheckboxChange}),
                React.DOM.input({type: 'text', value: filter, onChange: this.cbOnFilterChange}),
                React.DOM.button({type: 'button', onClick: this.cbClear}, "Сброс"),
            ),
            React.DOM.ul({className: 'list'},
                listHTML
            ),
            React.DOM.div({className: 'list'},
                this.state.filter
            ),
        );
    }

});