import express, { Application, Request, Response } from 'express';
import bookRoutes from '../src/app/routes/books.routes';
import borrowRoutes from '../src/app/routes/borrows.routes';

const app: Application = express();

app.use(express.json())

// Routes
app.use('/api', bookRoutes);
app.use('/api', borrowRoutes);


app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to library '); 
});


export default app;

// mvc - model  , controller