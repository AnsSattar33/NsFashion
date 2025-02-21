import express from 'express';
import { addItemToCart, removeItemFromCart } from '../controller/cartController.js';

const router = express.Router();

router.post('/add', addItemToCart);
router.post('/remove', removeItemFromCart);

export default router;
