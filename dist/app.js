"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const books_routes_1 = __importDefault(require("../src/app/routes/books.routes"));
const borrows_routes_1 = __importDefault(require("../src/app/routes/borrows.routes"));
const errorHandler_1 = __importDefault(require("./app/middlewares/errorHandler"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));
app.use(express_1.default.json());
app.use(errorHandler_1.default); // last middleware
// Routes
app.use('/api', books_routes_1.default);
app.use('/api', borrows_routes_1.default);
app.get('/', (req, res) => {
    res.send('Welcome to library ');
});
exports.default = app;
// mvc - model  , controller
