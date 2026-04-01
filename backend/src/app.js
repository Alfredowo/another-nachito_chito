import express from 'express';
import cors from 'cors';
import routes from './routes/sync.route.js';

const app = express();

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

app.use('/', routes);

app.get('/health', (req, res) => {
  res.json({ ok: true, service: 'backend', timestamp: new Date().toISOString() });
});

export default app;