import express from 'express';
import cors from 'cors';
import routes from './Routes/formRouter.js';
import dotenv from 'dotenv';
import connectDB from './Config/connectDatabase.js';
dotenv.config();

const app = express();
app.use(cors('http://localhost:5173'));
app.use(express.json()); 
connectDB();
   
const port = process.env.PORT || 3000;   

app.use('/api',routes);

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});
