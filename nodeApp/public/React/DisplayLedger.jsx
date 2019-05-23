var React = require('react');
var createReactClass = require('create-react-class');

module.exports = createReactClass({
  render: function() {
    console.log('props in legdger', this.props);
    return <div>this is where I will display ledger</div>;
  }
});
