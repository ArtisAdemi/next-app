import express from 'express';
import next from 'next';
import { connectToDatabase } from './db';
import dotenv from 'dotenv';
// import userRoutes from './routes/users';

// Load environment variables
dotenv.config();

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;

// Connect to MongoDB
connectToDatabase();

app.prepare().then(async () => {
    try {
        const server = express();

        // Add body parser middleware
        server.use(express.json());
        server.use('/api/hello', (req, res) => {
            res.send('Hello World');
        });
        // Use user routes
        // server.use('/api/users', userRoutes);

        // Handle all other routes with Next.js
        server.all('*', (req, res) => {
            return handle(req, res);
        });

        server.listen(port, () => {
            console.log(`> Ready on http://localhost:${port}`);
        });
    } catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
});