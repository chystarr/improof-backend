import express, { Request, Response, Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router: Router = express.Router();
const prisma: PrismaClient = new PrismaClient();

router.get('/', async (req: Request, res: Response) => {
  const timelines = await prisma.timeline.findMany();
  res.json(timelines);
});

router.post('/', async (req: Request, res: Response) => {
  const { title } = req.body;
  const timeline = await prisma.timeline.create({
    data: {
      title,
    },
  });
  res.json(timeline);
});

export default router;