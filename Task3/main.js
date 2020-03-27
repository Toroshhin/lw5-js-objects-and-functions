function flatArray(array) {
  if (Array.isArray(array)) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
      if (typeof array[i] === 'number' && !Number.isNaN(array[i])) {
        newArray.push(array[i]);
      } else if (Array.isArray(array[i])) {
        for (let k = 0; k < array[i].length; k++) {
          if (typeof array[i][k] === 'number' && !Number.isNaN(array[i][k])) {
            newArray.push(array[i][k]);
          }
        }
      }
    }
    return newArray;
  } else {
    return false;
  }
}
