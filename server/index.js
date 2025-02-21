import express from 'express';
import dotenv from 'dotenv';
import connectDatabase from './Config/connectDatabase.js';
import cartRoutes from './routes/cartRoute.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to the database
connectDatabase();

// Middleware
app.use(express.json());

// Routes
app.use('/api/cart', cartRoutes);

// ...existing code...

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});