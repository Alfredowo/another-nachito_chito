function normalizeString(value) {
  if (!value) return null;
  return value.trim();
}

function normalizeNumber(value) {
  if (value === null || value === '') return null;
  return Number(value);
}

function normalizeStatus(status) {
  if (!status) return 'unknown';
  return status.trim().toLowerCase();
}

function classifyService(service) {
  if (!service) return 'otros';

  const s = service.toLowerCase().trim();

  if (s.includes('credit') || s.includes('credito')) return 'creditos';
  if (s.includes('loan') || s.includes('prestamo')) return 'prestamos';
  if (s.includes('insurance') || s.includes('seguro')) return 'seguros';
  if (s.includes('card') || s.includes('tarjeta') || s.includes('credit card') || s.includes('credit-card')) return 'tarjetas de credito';

  return 'otros';
}

export { normalizeString, normalizeNumber, normalizeStatus, classifyService };