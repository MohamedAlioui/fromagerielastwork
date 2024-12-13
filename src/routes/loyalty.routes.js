import express from 'express';
import { protect } from '../middleware/auth.js';
import {
  getLoyaltyPoints,
  getLoyaltyHistory,
  getLoyaltyTiers,
  redeemPoints,
  addPoints
} from '../controllers/loyalty.controller.js';

const router = express.Router();

router.use(protect);

router.get('/points', getLoyaltyPoints);
router.get('/history', getLoyaltyHistory);
router.get('/tiers', getLoyaltyTiers);
router.post('/redeem', redeemPoints);
router.post('/add', addPoints);

export default router;