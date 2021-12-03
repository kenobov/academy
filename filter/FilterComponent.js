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
        this.editList({checkbox: e.target.checked});
    },

    cbOnFilterChange: function (e) {
        this.editList({filter: e.target.value});
    },

    cbClear: function () {
        this.editList({filter:'', checkbox:false});
    },

    editList: function ({filter = this.state.filter, checkbox = this.state.checkbox}) {
        let list = this.props.data.map(v=>v);
        if(filter.length > 0) list = list.filter(t => t.includes(filter));
        if(checkbox) list.sort();

        this.setState({
            filter, checkbox, list
        });
    },

    render: function () {

        const {filter, checkbox, list} = this.state;

        let i = 0, listHTML = list.length > 0
            ? list.map(el => React.DOM.li({key: i++}, el))
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
        );
    }

});