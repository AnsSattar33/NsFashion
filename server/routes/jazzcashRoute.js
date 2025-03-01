import express from 'express';
import { jazzcashPayment } from '../controller/jazzcashController.js';

const router = express.Router();

router.post('/payment', jazzcashPayment);

export default router;
