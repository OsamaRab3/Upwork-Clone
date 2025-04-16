
import express from 'express';
const app = express();
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';



import errorHandler from '../../shared/errors/errorHandler';
import connectDB from "./config/connect";

connectDB()

app.use(express.json())
app.use(helmet());
app.use(cors());   
app.use(morgan('dev')); 

import authRouter from './api/routes/auth'
app.use('/api/auth',authRouter)





app.use(errorHandler.notFoundHandler)
app.use(errorHandler.globalErrorHandler)



export default app;
