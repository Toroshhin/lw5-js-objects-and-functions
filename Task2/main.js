function isArrayEqual(oneArray, twoArray) {
  if (Array.isArray(oneArray) === Array.isArray(twoArray) && oneArray.length === twoArray.length) {
    for (let i = 0; i < oneArray.length; i++) {
      if (oneArray[i] !== twoArray[i]) {
        return false;
      }
    }
    return true;
  }
}
