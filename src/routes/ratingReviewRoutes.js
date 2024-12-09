const express = require('express');
const { authMiddleware, userMiddleware, adminMiddleware } = require('../middleware/authMiddleware');
const { createRatingReview, getRatingReview } = require('../controllers/ratingReviewController');


const router = express.Router();

router.get('/ulasan/show', authMiddleware, userMiddleware, adminMiddleware, getRatingReview);
router.post('/ulasan/create', authMiddleware, userMiddleware, createRatingReview);


module.exports = router;