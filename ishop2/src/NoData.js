const NoData = React.createClass({

   displayName: 'NoData',

   render: function () {
        return React.DOM.tr(null,
            React.DOM.td({colspan: 8},
                React.DOM.div({style: 'padding: 20px; text-align: cenvet'}, 'No data provided')
            )
        )
   }

});