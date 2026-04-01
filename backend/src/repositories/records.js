import db from '../config/db.js';

function saveRecords(records) {
  const stmt = db.prepare(`
    INSERT INTO records (
      application_id,
      name,
      email,
      phone,
      service_type,
      requested_amount,
      status,
      created_at
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `);

  for (const record of records) {
    stmt.run(
      record.application_id,
      record.name,
      record.email,
      record.phone,
      record.service_type,
      record.requested_amount,
      record.status,
      record.created_at
    );
  }
}

function getRecords() {
  return db.prepare('SELECT * FROM records ORDER BY id DESC').all();
}

export { saveRecords, getRecords };