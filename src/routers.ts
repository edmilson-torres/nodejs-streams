import Router from 'express';
import { csvToJsonController } from './controller';

const router = Router();

router.post('/', csvToJsonController);

export default router;
