import express from 'express';
import cors from 'cors';
import urlRouter from './routes/shortner.js';
import 'dotenv/config'
import mongoose from 'mongoose';
const app = express();

app.use(cors());
app.use(express.json());
await mongoose.connect(process.env.mongourl);
app.use('/api', urlRouter);

app.listen(process.env.port,()=>{
    console.log(`Server is running on port ${process.env.PORT}`); 
})