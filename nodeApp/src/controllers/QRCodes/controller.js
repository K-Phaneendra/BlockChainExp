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

export const getQrByName = (req, res, next) => {
  QRCodes.findOne({ name: req.params.qrName }).exec((err, qrcode) => {
    if (err) {
      SEND(res, true, {
        QRCodes: [],
        error: err,
        message: 'Error Fetching QR Code'
      });
    } else {
      SEND(res, false, {
        QRCode: qrcode
      });
    }
  });
};

export const openQR = (req, res, next) => {
  res.send(
    'should send a react app where user can see the scanned qr details / ledger'
  );
};
