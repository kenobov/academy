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
        this.setState( prevState => {
            return {
                checkbox: isChecked,
                list: prevState.list.sort()
            }
        });
    },

    cbOnFilterChange: function (e) {
        const value = e.target.value;
        this.setState( prevState => {
            return {
                filter: value,
                list: prevState.list.filter(t => t.includes(value))
            }
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