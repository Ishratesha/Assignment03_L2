import { ErrorRequestHandler } from 'express';
import mongoose from 'mongoose';

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  // Handle Mongoose ValidationError
  if (err instanceof mongoose.Error.ValidationError) {
    res.status(400).json({
      message: 'Validation failed',
      success: false,
      error: err,
    });
    return next();
  }

  // Handle Duplicate Key Error (e.g., duplicate ISBN)
  if (err.code === 11000) {
    const field = Object.keys(err.keyValue)[0];
    const value = err.keyValue[field];

    res.status(409).json({
      message: 'Duplicate field value',
      success: false,
      error: {
        name: 'MongoServerError',
        code: 11000,
        keyPattern: err.keyPattern,
        keyValue: err.keyValue,
        message: `Duplicate value for field "${field}": "${value}"`,
      },
    });
    return next();
  }

  // Catch-all server error
  res.status(500).json({
    message: 'Internal server error',
    success: false,
    error: err.message || err,
  });
  return next();
};

export default errorHandler;
