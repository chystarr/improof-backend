import express, { Express, Request, Response, Router } from 'express';
import timelinesController from './controllers/timelines';
import postsController from './controllers/posts';

const app: Express = express();
const port = 8000;

app.use(express.json());
app.use('/timelines', timelinesController);
app.use('/posts', postsController);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World (now in TypeScript)!');
});

app.listen(port, () => {
  console.log(`Hello World! (Listening on port ${port}--now in TypeScript!)`);
});