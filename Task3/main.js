window.onload = function () {
  let oneArray = ['Миша', 'Борис', 'Инокентий',];
  let twoArray = ['Андрей', 'Кирилл', oneArray,];

  console.log(oneArray);
  console.log(twoArray);

  let newArray = twoArray.flat();
  console.log(newArray);
}
