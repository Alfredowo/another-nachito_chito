import axios from 'axios';
import {
  normalizeString,
  normalizeNumber,
  normalizeStatus,
  classifyService
} from '../utils/normalizer.js';

import { saveLog } from '../repositories/logs.js';
import { saveRecords } from '../repositories/records.js';

const MOCK_API_URL = process.env.MOCK_API_URL;
const MOCK_API_TOKEN = process.env.MOCK_API_TOKEN;

async function runSync() {
  const start = Date.now();

  try {
    const response = await axios.post(
      `${MOCK_API_URL}/mock/sync`,
      {
        source: 'nachito-chito',
        entity: 'customer-applications'
      },
      {
        headers: {
          Authorization: `Bearer ${MOCK_API_TOKEN}`
        }
      }
    );

    const data = response.data.data || [];

    const processed = data.map(item => ({
      application_id: normalizeString(item.applicationId),
      name: normalizeString(item.fullName),
      email: normalizeString(item.email),
      phone: normalizeString(item.phone),
      service_type: classifyService(item.interestedService),
      requested_amount: normalizeNumber(item.requestedAmount),
      status: normalizeStatus(item.status),
      created_at: item.createdAt || new Date().toISOString()
    }));

    saveRecords(processed);

    const duration = Date.now() - start;

    saveLog({
      timestamp: new Date().toISOString(),
      status: 'success',
      duration,
      records_count: processed.length,
      message: 'Sincroniazción completada exutosamente'
    });

    return { success: true };

  } catch (err) {
    const duration = Date.now() - start;

    saveLog({
      timestamp: new Date().toISOString(),
      status: 'error',
      duration,
      records_count: 0,
      message: err.message || 'Error durante la sincronización'
    });

    return { success: false };
  }
}

export { runSync };