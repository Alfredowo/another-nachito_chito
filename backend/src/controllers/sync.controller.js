import { runSync } from '../services/sync.service.js';
import { getLogs } from '../repositories/logs.js';
import { getRecords } from '../repositories/records.js';

async function sync(req, res) {
  const result = await runSync();
  console.log('Resultado de la sincronización:', result);
  if (result.success) {
    return res.status(200).json(result);
  } else {
    return res.status(500).json({
      success: false,
      message: result.message || "Error en la sincronización"
    });
  }
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