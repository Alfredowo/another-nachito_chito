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

  console.log('Servicio:', status);

  const s = status.toLowerCase().trim();

  if (s.includes('pending_review') || s.includes('in_review') || s.includes('pending')) return 'pendiente';
  if (s.includes('approved')) return 'aprobado';
  if (s.includes('rejected')) return 'rechazado';

  return 'status desconocido';
}

function classifyService(service) {
  if (!service) return 'otros';

  console.log('Servicio:', service);

  const s = service.toLowerCase().trim();

  if (s.includes('card') || s.includes('tarjeta') || s.includes('credit card') || s.includes('credit-card')) return 'tarjetas de credito';
  if (s.includes('credit') || s.includes('credito')) return 'creditos';
  if (s.includes('loan') || s.includes('prestamo')) return 'prestamos';
  if (s.includes('insurance') || s.includes('seguro')) return 'seguros';

  return 'otros';
}

function normalizePhone(value) {
  if (!value) return null;
  const phoneNumber = value.replace(/\D/g, '');
  if (phoneNumber.length !== 10) return null;
  return `+${phoneNumber}`;
}

export { normalizeString, normalizeNumber, normalizeStatus, classifyService, normalizePhone };