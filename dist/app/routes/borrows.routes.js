"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const borrow_controller_1 = require("../controllers/borrow.controller");
const validateRequest_1 = __importDefault(require("../middlewares/validateRequest"));
const borrow_validation_1 = require("../validations/borrow.validation");
const router = express_1.default.Router();
// POST /api/borrow - Borrow a book
router.post('/borrow', (0, validateRequest_1.default)(borrow_validation_1.borrowBookSchema), borrow_controller_1.borrowBook);
// GET /api/borrow - Get borrow summary using aggregation
router.get('/borrow', borrow_controller_1.getBorrowSummary);
exports.default = router;
