import { Router } from 'express';
import {
  fetchAll,
  createQR,
  updateQR,
  // getQrByName,
  openQR,
  checkIfNameExists
} from './controller';

const router = new Router();

router.get('/', fetchAll);
router.get('/checkIfNameExists/:qrName', checkIfNameExists);
router.post('/createQR', createQR);
router.post('/updateQR/:qrName', updateQR);
// router.get('/getQrByName/:qrName', getQrByName);
router.get('/openQR/:qrName', openQR);

export default router;
