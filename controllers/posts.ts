import express, { Request, Response, Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router: Router = express.Router();
const prisma: PrismaClient = new PrismaClient();

router.get('/', async (req: Request, res: Response) => {
  const posts = await prisma.post.findMany();
  res.json(posts);
});

router.post('/', async (req: Request, res: Response) => {

});

export default router;