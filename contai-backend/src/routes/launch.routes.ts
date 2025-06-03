import { Router, Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { Launch } from '../entity/Launch';

const router = Router();
const launchRepository = AppDataSource.getRepository(Launch);

// GET /launches
router.get('/launches', async (req: Request, res: Response): Promise<void> => {
  try {
    const launches = await launchRepository.find();
    res.json(launches);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch launches' });
  }
});

// POST /launches
router.post('/launches', async (req: Request, res: Response): Promise<void> => {
  try {
    const { date, description, amount, type } = req.body;

    if (!date || !description || !amount || !type) {
      res.status(400).json({ error: 'Missing required fields' });
      return;
    }

    const launch = launchRepository.create({ date, description, amount, type });
    await launchRepository.save(launch);

    res.status(201).json(launch);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create launch' });
  }
});

export default router;
