
import express from 'express';
import { borrowBook, getBorrowSummary } from '../controllers/borrow.controller';
import validateRequest from '../middlewares/validateRequest';
import { borrowBookSchema } from '../validations/borrow.validation';

const router = express.Router();

// POST /api/borrow - Borrow a book
router.post('/borrow', validateRequest(borrowBookSchema), borrowBook);

// GET /api/borrow - Get borrow summary using aggregation
router.get('/borrow', getBorrowSummary);

export default router;
