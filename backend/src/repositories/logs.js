import db from '../config/db.js';

function saveLog(log) {
  const { timestamp, status, duration, records_count, message } = log;

  db.prepare(
    `INSERT INTO logs (timestamp, status, duration, records_count, message)
     VALUES (?, ?, ?, ?, ?)`
  ).run(timestamp, status, duration, records_count, message);
}

function getLogs() {
  return db.prepare('SELECT * FROM logs ORDER BY id DESC').all();
}

export { saveLog, getLogs };