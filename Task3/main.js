
function flatArray(array) {
  if (Array.isArray(array)) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
      if (!Array.isArray(array[i]) && typeof array[i] === 'number' && !Number.isNaN(array[i])) { //если элемент массива - чиcло
        newArray.push(array[i]);
      } else if (Array.isArray(array[i])) {
        for (let k = 0; k < array[i].length; k++) {
          if (typeof array[i][k] === 'number') {
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
