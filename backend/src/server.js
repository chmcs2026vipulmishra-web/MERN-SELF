import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import footwearRoutes from './routes/footwearRoutes.js';
import { connectDB } from './config/db.js';
import dns from 'node:dns';

dns.setServers(['1.1.1.1', '8.8.8.8']);

dotenv.config();

const app = express();
app.use(cors());

const port = process.env.PORT || 3001;

app.use(express.json());

// Health check endpoint
app.get("/", (req, res) => {
    res.json({ message: "Footwear API is running" });
});

app.use("/footwear", footwearRoutes);

connectDB().then(() => {
    app.listen(port, () => {
        console.log(`http://localhost:${port}/footwear`);
    });
}).catch((error) => {
    console.error("Failed to connect to MongoDB:", error);
    process.exit(1);
});
