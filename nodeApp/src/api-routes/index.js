import { Router } from 'express';

import Answers from '../controllers/Answers';
import QRCodes from '../controllers/QRCodes';

const router = new Router();

router.use('/answers', Answers);
router.use('/qrcodes', QRCodes);

export default router;
