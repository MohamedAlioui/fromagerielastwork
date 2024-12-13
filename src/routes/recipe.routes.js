import express from 'express';
import { protect, authorize } from '../middleware/auth.js';
import {
  getRecipes,
  getRecipeById,
  createRecipe,
  updateRecipe,
  deleteRecipe
} from '../controllers/recipe.controller.js';
import { upload } from '../utils/upload.js';

const router = express.Router();

router.route('/')
  .get(getRecipes)
  .post(protect, authorize('admin'), upload.array('images', 5), createRecipe);

router.route('/:id')
  .get(getRecipeById)
  .put(protect, authorize('admin'), upload.array('images', 5), updateRecipe)
  .delete(protect, authorize('admin'), deleteRecipe);

export default router;