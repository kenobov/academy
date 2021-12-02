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
        const checkbox = e.target.checked;
        this.editList({checkbox});
    },

    cbOnFilterChange: function (e) {
        const filter = e.target.value;
        this.editList({filter});
    },

    cbClear: function () {
        this.setState({
            list: this.props.data,
            filter: '',
            checkbox: false
        })
    },

    editList: function ({filter = this.state.filter, checkbox = this.state.checkbox}) {
        let list = this.props.data.map(v=>v);
        if(filter.length > 0) list = list.filter(t => t.includes(filter));
        if(checkbox) list.sort();

        console.log({
            filter, checkbox, list
        })
        this.setState({
            filter, checkbox, list
        });
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