function capitalize(string) {
  str2 = string.split('')
  str2[0] = str2[0].toUpperCase()
  
  return str2.join('')
}

module.exports = capitalize;