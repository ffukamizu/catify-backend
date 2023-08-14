import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.SERVER_PORT || 5000;

const app = express();

app.use(express.json());
app.use(
    cors({
        origin: 'https://catify-front.vercel.app',
        credentials: false, 
    })
);
app.listen(PORT, () => {
    console.log(`Server online, running on port: ${PORT}`);
});
