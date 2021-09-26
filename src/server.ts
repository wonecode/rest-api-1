import express, { Request, Response } from "express";
import mongoose from 'mongoose';
import cors from 'cors';
import asyncHandler from 'express-async-handler';
import WilderController from './controllers/Wilders';

export {};

const app = express();

const url =
  'mongodb+srv://lochgdt:admin@cluster0.9n7e8.mongodb.net/wilders?retryWrites=true&w=majority';

mongoose
  .connect(url, {
    autoIndex: true,
  })
  .then(() => console.log('Connected to database'))
  .catch((err: Error) => console.log(err));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// routes
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World');
});

app.post('/api/wilder/create', asyncHandler(WilderController.create));
app.get('/api/wilder/read', asyncHandler(WilderController.read));
app.put('/api/wilder/update/:id', asyncHandler(WilderController.update));
app.delete('/api/wilder/delete/:id', asyncHandler(WilderController.delete));

app.use((req: Request, res: Response) =>
  res.status(404).send("Sorry can't find that!")
);

app.listen(5000, () => console.log('Server started on 5000'));
