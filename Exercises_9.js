function cariMean(array) {
  var rumus = 0
  var i = 0

  while (i < array.length) {
    rumus = rumus + array[i]
    i++
  }
  var rataRata = rumus / (array.length)

  return Math.round(rataRata)
}

console.log(cariMean([1, 2, 3, 4, 5]))
console.log(cariMean([3, 5, 7, 5, 3]))
console.log(cariMean([6, 5, 4, 7, 3]))
console.log(cariMean([1, 3, 3]))
console.log(cariMean([7, 7, 7, 7, 7]))