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
        this.setState({
            checkbox: e.target.checked,
            list: this.state.list.sort()
        });
    },

    cbOnFilterChange: function (e) {
        this.setState({
            filter: e.target.value,
            list: this.props.data.filter(t => t.includes(e.target.value))
        });
    },

    cbClear: function () {
        this.setState({
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