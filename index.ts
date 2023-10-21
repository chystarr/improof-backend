import express, { Express, Request, Response, Router } from 'express';
import { PrismaClient } from '@prisma/client';
import timelines from './controllers/timelines';

const app: Express = express();
const port = 8000;
const router: Router = express.Router();
const prisma: PrismaClient = new PrismaClient();

app.use(express.json());

app.use('/timelines', timelines);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World (now in TypeScript)!');
});

app.listen(port, () => {
  console.log(`Hello World! (Listening on port ${port}--now in TypeScript!)`);
});