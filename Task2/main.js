window.onload = function () {
  let oneArray = ['Миша', 'Кирилл', 'Василий',];
  let twoArray = ['Кирилл', 'Кирилл', 'Василий',];

  document.write('Первый массив: ' + oneArray + '<br>');
  document.write('Второй массив: ' + twoArray + '<br><br>');

  if (oneArray.length > twoArray.lenght) {
    var maxLength = oneArray.length;
  } else {
    var maxLength = twoArray.length;
  }

  for (let i = 0; i < maxLength; i++) {

    if (oneArray[i] == twoArray[i]) {
      document.write('Элемент массива 1 под номером №' + (i + 1) + '[' + oneArray[i] + '] Равен элементу массива 2 под номером №' + (i + 1) + '[' + twoArray[i] + ']<br>');
    } else {
      document.write('Элемент массива 1 под номером №' + (i + 1) + '[' + oneArray[i] + '] Не равен элементу массива 2 под номером №' + (i + 1) + '[' + twoArray[i] + ']<br>');
    }
  }
}


