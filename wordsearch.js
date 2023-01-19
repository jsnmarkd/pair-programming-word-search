const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
      if (l.includes(word)) {
        return true
      }
      for (col of horizontalJoin[0]) {
        if(col.includes(word))
          return true
      }
    }
    const backwards = word.split('').reverse().join('')
    for (l of horizontalJoin) {
      if(l.includes(backwards)) {
        return true
      }
      for (col of horizontalJoin[0]) {
        if(col.includes(backwards)){
          return true;
        }
      }
    }
    return false;
}


module.exports = wordSearch