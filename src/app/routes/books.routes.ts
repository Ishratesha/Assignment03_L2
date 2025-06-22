// src/routes/book.route.ts
import express from 'express';
import {
  createBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook
} from '../controllers/books.conteoller';


const router = express.Router();

// POST /api/books - Create a new book
router.post('/books', createBook);

// GET /api/books - Get all books with optional filters
router.get('/books', getAllBooks);

// GET /api/books/:bookId - Get a book by ID
router.get('/books/:bookId', getBookById);

// PUT /api/books/:bookId - Update a book by ID
router.put('/books/:bookId', updateBook);

// DELETE /api/books/:bookId - Delete a book by ID
router.delete('/books/:bookId', deleteBook);



export default router;
