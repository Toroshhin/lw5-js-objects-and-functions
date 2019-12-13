function check(data, expectedType) {
  let result = false;

  if (expectedType === 'array' && Array.isArray(data)) {
    result = true;
  }

  if (expectedType === 'number' && typeof data === 'number') {
    result = true;
  }
  if (expectedType === 'string' && typeof data === 'string') {
    result = true;
  }

  if (expectedType === 'object' && typeof data === 'object') {
    result = true;
  }

  if (expectedType === 'null' && typeof data === 'null') {
    result = true;
  }

  return result;
}
