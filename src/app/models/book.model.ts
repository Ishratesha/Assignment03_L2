import mongoose, { Schema } from 'mongoose';
import { IBook } from '../interfaces/books.interface';


const bookSchema = new Schema<IBook>(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: {
      type: String,
      required: true,
      enum: ['FICTION', 'NON_FICTION', 'SCIENCE', 'HISTORY', 'BIOGRAPHY', 'FANTASY'],
    },
    isbn: { type: String, required: true, unique: true },
    description: { type: String },
    copies: { type: Number, required: true, min: 0 },
    available: { type: Boolean, default: true },
  },
  { timestamps: true }
);

bookSchema.methods.adjustAvailability = function () {
  this.available = this.copies > 0;
};

bookSchema.pre('save', function (next) {
  this.available = this.copies > 0;
  next();
});

export const Book = mongoose.model<IBook>('Book', bookSchema);