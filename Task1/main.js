//Task1 ReplaceSting()

let addSubStr = document.querySelector("#sub_str");
let addNewSubStr = document.querySelector("#new_sub_str");
let button = document.querySelector("#button");
let str = "Стив Джобc Американский предприниматель Википедия Американский предприниматель, изобретатель и промышленный дизайнер, получивший широкое признание в качестве пионера эры информационных технологий.Один из основателей, председатель совета директоров и CEO корпорации Apple.Один из основателей и CEO киностудии Pixar";
document.querySelector('#text').innerHTML = str;

button.onclick = function () {
  let valSubStr = addSubStr.value;
  let valNewSubStr = addNewSubStr.value;
  console.log(valSubStr);
  console.log(valNewSubStr);
  addNewSubStr.value = '';
  addSubStr.value = '';
  let replaceStr = str.replace(valSubStr, valNewSubStr);
  str = replaceStr;
  document.querySelector('#text').innerHTML = replaceStr; 
}

