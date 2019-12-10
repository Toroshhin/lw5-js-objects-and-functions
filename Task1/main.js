function replaceString(text, searchStr, newStr) {
  text = text.toLowerCase();
  searchStr = searchStr.toLowerCase();
  newStr = newStr.toLowerCase();

  if (text.indexOf(searchStr) === -1) {
    return false
  } else {
    for (let i = 0; i < text.length; i++) {
      text = text.replace(searchStr, newStr);
    }
    return text;
  }
}