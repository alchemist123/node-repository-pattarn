import express, { Application } from 'express';
import 'reflect-metadata'; 
import './container';
import userRouter from './user/user.router';

const app: Application = express();

// Middleware
app.use(express.json());

// Routes
app.use('/users', userRouter);

export default app;
