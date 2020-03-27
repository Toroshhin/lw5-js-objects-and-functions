function check(data, expectedType) {
  if (expectedType === 'array' && Array.isArray(data)) {
    return true;
  }
  if (expectedType === 'number' && typeof data === 'number') {
    return true;
  }
  if (expectedType === 'string' && typeof data === 'string') {
    return true;
  }
  if (expectedType === 'object' && typeof data === 'object' && !Array.isArray(data)) {
    return true;
  }
  if (expectedType === 'null' && typeof data === 'object') {
    return true;
  }
  return false;
}
