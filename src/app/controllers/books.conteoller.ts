import { Request, Response, NextFunction } from 'express';
import { Book } from '../models/book.model';


/**
 * Book Controller
 * Handles book-related operations such as creating, retrieving, and listing books.
 * 
 * @module controllers/books.controller
 */

// 1. Create Book
export const createBook = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const book = new Book(req.body);
    await book.save();

    res.status(201).json({
      success: true,
      message: 'Book created successfully',
      data: book,
    });
  } catch (error) {
    next(error);
  }
};

// 2. Get All Books
export const getAllBooks = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const filter = req.query.filter as string;
    const sortBy = req.query.sortBy as string || 'createdAt';
    const sortOrder = req.query.sort === 'asc' ? 1 : -1;
    const limit = parseInt(req.query.limit as string) || 10;

    const query: any = {};
    if (filter) query.genre = filter;

    const books = await Book.find(query)
      .sort({ [sortBy]: sortOrder })
      .limit(limit);

    res.status(200).json({
      success: true,
      message: 'Books retrieved successfully',
      data: books,
    });
  } catch (error) {
    next(error);
  }
};

// 3. Get Book by ID
export const getBookById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const book = await Book.findById(req.params.bookId);
      if (!book) {
        res.status(404).json({ success: false, message: 'Book not found', error: 'NotFound' });
        return;
      }
      res.status(200).json({ success: true, message: 'Book retrieved successfully', data: book });
    } catch (error) {
      next(error);
    }
  };
  

// 4. Update Book
export const updateBook = async (req: Request, res: Response, next: NextFunction):Promise<void> => {
  try {
    const book = await Book.findById(req.params.bookId);
    if (!book) {
       res.status(404).json({
        success: false,
        message: 'Book not found',
        error: 'NotFound'
      });
      return
    }

    Object.assign(book, req.body);
    await book.save();

    res.status(200).json({
      success: true,
      message: 'Book updated successfully',
      data: book
    });
  } catch (error) {
    next(error);
  }
};

// 5. Delete Book
export const deleteBook = async (req: Request, res: Response, next: NextFunction):Promise<void> => {
  try {
    const book = await Book.findByIdAndDelete(req.params.bookId);
    if (!book) {
       res.status(404).json({
        success: false,
        message: 'Book not found',
        error: 'NotFound'
      });
      return;   }

    res.status(200).json({
      success: true,
      message: 'Book deleted successfully',
      data: null
    });
  } catch (error) {
    next(error);
  }
};
