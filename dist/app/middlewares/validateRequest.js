"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validateRequest = (schema) => {
    return (req, res, next) => {
        try {
            schema.parse(req.body);
            next();
        }
        catch (error) {
            res.status(400).json({
                success: false,
                message: 'Validation failed',
                error: error.errors || error.message,
            });
        }
    };
};
exports.default = validateRequest;
