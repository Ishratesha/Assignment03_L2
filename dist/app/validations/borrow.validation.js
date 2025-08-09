"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.borrowBookSchema = void 0;
// src/validations/borrow.validation.ts
const zod_1 = require("zod");
exports.borrowBookSchema = zod_1.z.object({
    book: zod_1.z.string({ required_error: 'Book ID is required' }),
    quantity: zod_1.z
        .number({ required_error: 'Quantity is required' })
        .int()
        .positive('Quantity must be a positive number'),
    dueDate: zod_1.z.string({ required_error: 'Due date is required' }).refine((val) => !isNaN(Date.parse(val)), {
        message: 'Invalid date format',
    }),
});
