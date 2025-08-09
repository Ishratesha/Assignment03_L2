"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/book.route.ts
const express_1 = __importDefault(require("express"));
const books_conteoller_1 = require("../controllers/books.conteoller");
const router = express_1.default.Router();
// POST /api/books - Create a new book
router.post('/books', books_conteoller_1.createBook);
// GET /api/books - Get all books with optional filters
router.get('/books', books_conteoller_1.getAllBooks);
// GET /api/books/:bookId - Get a book by ID
router.get('/books/:bookId', books_conteoller_1.getBookById);
// PUT /api/books/:bookId - Update a book by ID
router.put('/books/:bookId', books_conteoller_1.updateBook);
// DELETE /api/books/:bookId - Delete a book by ID
router.delete('/books/:bookId', books_conteoller_1.deleteBook);
exports.default = router;
