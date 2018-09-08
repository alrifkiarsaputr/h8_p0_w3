function balikKata(string) {
    var kataBalik = ''
    for (i = string.length - 1; i >= 0; i--) {
      kataBalik = kataBalik + string[i]
    }
    return kataBalik
  }
  
  console.log(balikKata('hello world!'))