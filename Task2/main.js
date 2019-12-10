function isArrayEqual(oneArray, twoArray) {
  let boolean = true;
  if (Array.isArray(oneArray) === Array.isArray(twoArray) && oneArray.length === twoArray.length) {
    for (let i = 0; i < oneArray.length; i++) {
      if (oneArray[i] !== twoArray[i]) {
        boolean = false;
        break;
      } else {
        return boolean;
      }
    }
  } else {
    return false;
  }
}
