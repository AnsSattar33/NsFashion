import express from 'express';
import dotenv from 'dotenv';
import connectDatabase from './Config/connectDatabase.js';
import cartRoutes from './routes/cartRoute.js';
import jazzcashRoutes from './routes/jazzcashRoute.js';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to the database
connectDatabase();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/cart', cartRoutes);
app.use('/api/jazzcash', jazzcashRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});