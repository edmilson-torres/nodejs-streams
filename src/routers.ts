import { Router } from 'express';
const router = Router();

router.get('/ping', async (req, res) => {
    return res.json({ message: 'pong' });
});

export default router;
