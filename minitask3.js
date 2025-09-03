//    *   
//   ***  
//  ***** 
// *******

// * * * * *
// *       *
// *       *
// *       *
// * * * * *

// Pattern Persegi
let tinggiPersegi = 5
for (let i = 0; i < tinggiPersegi; i++) {
    let bintang1 = ""
    if (i === 0 || i === tinggiPersegi-1){
        for (let j = 0; j < tinggiPersegi; j++) {
            if (j === tinggiPersegi-1){
                bintang1 += "*"
            } else {
                bintang1 += "* "
            }
        }
        console.log(bintang1)
    } else {
        for (let k = 0; k < tinggiPersegi; k++) {
            if (k === 0){
                bintang1 += "*"
            } else if (k === tinggiPersegi-1){
                bintang1 += " *"
            } else {
                bintang1 += "  "
            }
        }
        console.log(bintang1)
    }
}