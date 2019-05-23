import React from 'react';
import ReactDOMServer from 'react-dom/server';

const App = require('../../../public/React/App.jsx');

import QRCodes from '../../models/QRCodes';
import { SEND } from '../response';

export const fetchAll = (req, res, next) => {
  QRCodes.find({}).exec((err, qrcodes) => {
    if (err) {
      SEND(res, true, {
        QRCodes: [],
        error: err,
        message: 'Error Fetching QR Codes'
      });
    } else {
      SEND(res, false, {
        QRCodes: qrcodes
      });
    }
  });
};

export const createQR = (req, res, next) => {
  QRCodes.create(req.body).exec((err, created) => {
    if (err) {
      SEND(res, true, {
        QRCodes: [],
        error: err,
        message: 'Error Creating QR Code'
      });
    } else {
      SEND(res, false, {
        QRCode: created
      });
    }
  });
};

export const updateQR = (req, res, next) => {
  QRCodes.findOneAndUpdate(
    { name: req.params.qrName },
    { $push: { chain: req.body } },
    { new: true, upsert: false }
  ).exec((err, updated) => {
    if (err) {
      SEND(res, true, {
        QRCodes: [],
        error: err,
        message: 'Error Updating QR Code'
      });
    } else {
      SEND(res, false, {
        QRCode: updated
      });
    }
  });
};

// export const getQrByName = (req, res, next) => {
//   QRCodes.findOne({ name: req.params.qrName }).exec((err, qrcode) => {
//     if (err) {
//       SEND(res, true, {
//         QRCodes: [],
//         error: err,
//         message: 'Error Fetching QR Code'
//       });
//     } else {
//       SEND(res, false, {
//         QRCode: qrcode
//       });
//     }
//   });
// };

export const openQR = (req, res, next) => {
  const displayObj = {};

  const foundQRCode = new Promise(resolve => {
    QRCodes.findOne({ name: req.params.qrName }).exec((err, qrcode) => {
      if (err) {
        displayObj.error = true;
        displayObj.message = 'Error Fetching QR Code';
        resolve(displayObj);
      } else {
        displayObj.error = false;
        displayObj.QRCode = qrcode;
        resolve(displayObj);
      }
    });
  });

  foundQRCode.then(data => {
    console.log('displayObj', data);

    const html = ReactDOMServer.renderToString(React.createElement(App, data));
    res.send(html);
  });
};
