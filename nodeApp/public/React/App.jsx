var React = require('react');
var createReactClass = require('create-react-class');

import DisplayLedger from './DisplayLedger.jsx';

module.exports = createReactClass({
  // handleClick: function() {
  //   alert();
  // },

  render: function() {
    console.log('props in comp', this.props);
    const { QRCode } = this.props;
    return (
      <html>
        <head>
          <title>React SSR</title>
          <link rel="stylesheet" href="/style.css" />
        </head>
        <body>
          <div className="App">
            <header className="App-header">
              <h1 className="App-title">Ledger Of {QRCode && QRCode.name}</h1>
            </header>
            {/* <button onClick={this.handleClick}>click me</button> */}

            {QRCode && <DisplayLedger ledger={QRCode.chain} />}
          </div>

          <script src="/bundle.js" />
        </body>
      </html>
    );
  }
});
