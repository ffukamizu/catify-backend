import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './routes/index.route.js';

dotenv.config();

const PORT = process.env.SERVER_PORT || 5000;

const app = express();

const corsOptions = {
    origin: 'https://catify-front.vercel.app', 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, 
    optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
    console.log(`Server online, running on port: ${PORT}`);
});
