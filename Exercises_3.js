var input=[['0001','Roman Alamsyah','Bandar Lampung', '21/05/1989','Membaca'],
['0002','Dika Sembiring','Medan','10/10/1992','Bermain gitar'],
['0003','Winona','Ambon','25/12/1965','Memasak'],
['0004','Bintang Senjaya','Martapura','6/4/1970','Berkebun']]

function dataHandling(){
  var index=0
  while(index<input.length){
    var nomorID=input[index][0]
    var namaLengkap=input[index][1]
    var ttl=input[index][2]+' '+input[index][3]
    var hobi=input[index][4]
    console.log('Nomor ID: '+nomorID)
    console.log('Nama Lengkap: '+namaLengkap)
    console.log('TTL: '+ttl)
    console.log('Hobi: '+hobi)
    console.log('')
    index++
  }
 
}

dataHandling()