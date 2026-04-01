import { Router } from 'express';
import * as controller from '../controllers/sync.controller.js';

const router = Router();

router.post('/sync', controller.sync);
router.get('/logs', controller.logs);
router.get('/records', controller.records);

export default router;