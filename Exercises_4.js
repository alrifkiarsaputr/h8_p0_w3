function dataHandling2(input) {
  input.splice(1,2,'Roman Alamsyah Elsharawy','Provinsi Bandar Lampung')
  input.splice(4,1,'Pria','SMA Internasional Metro')
  
  console.log(input) 
  
  var tanggal = input[3].split('/')
  
  var tanggal2 = tanggal.join('-')
  // return tanggal2
  // console.log(tanggal2);

  // return tanggal[1]
  var bulan = tanggal[1]
  switch (bulan) {
      case '01': {console.log('Januari'); break;}
      case '02': {console.log('Februari'); break;}
      case '03': {console.log('Maret'); break;}
      case '04': {console.log('April'); break;}
      case '05': {console.log('Mei'); break;}
      case '06': {console.log('Juni'); break;}
      case '07': {console.log('Juli'); break;}
      case '08': {console.log('Agustus'); break;}
      case '09': {console.log('September'); break;}
      case '10': {console.log('Oktober'); break;}
      case '11': {console.log('November'); break;}
      case '12': {console.log('Desember'); break;}
  }
  
  // tanggal.parseInt()
  tanggal.sort(function(value1, value2) { return Number(value1) < Number(value2) })

  console.log(tanggal);
  console.log(tanggal2);
  
  return input[1].slice(0,14)
  // return input[1]
  // return tanggal
}

console.log(dataHandling2(["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"] ));

