var React = require('react');
var createReactClass = require('create-react-class');

module.exports = createReactClass({
  render: function() {
    console.log('props in legdger', this.props);
    const { ledger } = this.props;
    return (
      <div>
        <ul>
          {ledger.map((record, i) => (
            <li key={i}>{record.item}</li>
          ))}
        </ul>
      </div>
    );
  }
});
