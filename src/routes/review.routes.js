import express from 'express';
import { protect } from '../middleware/auth.js';
import {
  createReview,
  getProductReviews,
  updateReview,
  deleteReview,
  markHelpful
} from '../controllers/review.controller.js';
import { upload } from '../utils/upload.js';

const router = express.Router();

router.route('/')
  .post(protect, upload.array('images', 3), createReview);

router.route('/product/:productId')
  .get(getProductReviews);

router.route('/:id')
  .put(protect, upload.array('images', 3), updateReview)
  .delete(protect, deleteReview);

router.route('/:id/helpful')
  .post(protect, markHelpful);

export default router;