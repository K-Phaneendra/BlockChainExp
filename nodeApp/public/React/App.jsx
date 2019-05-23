var React = require('react');
var createReactClass = require('create-react-class');

const DisplayLedger = require('./DisplayLedger.jsx');

module.exports = createReactClass({
  handleClick: function() {
    alert();
  },

  render: function() {
    console.log('props in comp', this.props);
    return (
      <html>
        <head>
          <title>React SSR</title>
          <link rel="stylesheet" href="/style.css" />
        </head>
        <body>
          <div>
            <button onClick={this.handleClick}>click me</button>

            <DisplayLedger />
          </div>

          <script src="/bundle.js" />
        </body>
      </html>
    );
  }
});
