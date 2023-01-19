const wordSearch = (letters, word) => { 
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }
  const vertical = []; // transposed the letters
  for (let row of letters[0]) {
    vertical.push([]);
  }
  for (let row in letters) {
    for (let col in letters[0]) {
      vertical[col].push(letters[row][col]);
    }
  }
  const verticalJoin = vertical.map(ls => ls.join('')); // copied the horizontal join but vertical
  for (l of verticalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }
  const backwards = word.split('').reverse().join('');
  for (l of horizontalJoin) {
    if(l.includes(backwards)) {
      return true
    }
  }
  return false;
}


module.exports = wordSearch