import Database from 'better-sqlite3';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const db = new Database(join(__dirname, '../../database/nachitobd.sqlite'));

db.exec(`
  CREATE TABLE IF NOT EXISTS logs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    timestamp TEXT,
    status TEXT,
    duration INTEGER,
    records_count INTEGER,
    message TEXT
  )
`);

db.exec(`
  CREATE TABLE IF NOT EXISTS records (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    application_id TEXT,
    name TEXT,
    email TEXT,
    phone TEXT,
    service_type TEXT,
    requested_amount REAL,
    status TEXT,
    created_at TEXT
  )
`);

export default db;