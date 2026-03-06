import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import footwearRoutes from './routes/footwearRoutes.js';
import { connectDB } from './config/db.js';
import dns from 'node:dns';

dns.setServers(['1.1.1.1', '8.8.8.8']);

dotenv.config();

const app = express();

// allow requests from frontend (vite dev server or whatever host)
app.use(cors());

// express will listen on PORT env variable (uppercase) if provided
const port = process.env.PORT || 3001;

app.use(express.json());
app.use("/", footwearRoutes);

connectDB().then(() => {
    app.listen(port, () => {
        console.log(`http://localhost:${port}/footwear`);
    });
});
