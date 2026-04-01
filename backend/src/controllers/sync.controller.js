import { runSync } from '../services/sync.service.js';
import { getLogs } from '../repositories/logs.js';
import { getRecords } from '../repositories/records.js';

async function sync(req, res) {
  const result = await runSync();
  res.json(result);
}

function logs(req, res) {
  const data = getLogs();
  res.json(data);
}

function records(req, res) {
  const data = getRecords();
  res.json(data);
}

export { sync, logs, records };