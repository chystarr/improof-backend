import express, { Express, Request, Response } from 'express';
const app: Express = express();
const port = 8000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World (now in TypeScript)!');
});

app.listen(port, () => {
  console.log(`Hello World! (Listening on port ${port} (now in TypeScript!)`);
});