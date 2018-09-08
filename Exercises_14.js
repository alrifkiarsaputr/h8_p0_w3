function mengelompokkanAngka(array){
    var arraykel3=[]
    var arrayGenap=[]
    var arrayGanjil=[]

    for(let i=0; i<array.length; i++){
        if(array[i]%3===0){
            arraykel3.push(array[i])
        }
        else if(array[i]%2===0){
            arrayGenap.push(array[i])
        }
        else{
            arrayGanjil.push(array[i])
        }
    }
    return arrayGabungan=[arrayGenap,arrayGanjil,arraykel3]
}

console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]
