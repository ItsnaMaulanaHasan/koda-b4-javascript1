//     *   
//    * *  
//   * * * 
//  * * * *
// * * * * *

// * * * * *
// *       *
// *       *
// *       *
// * * * * *

console.log("Pattern Persegi")
let tinggiPersegi = 5
for (let i = 0; i < tinggiPersegi; i++) {
    let output = ""
    if (i === 0 || i === tinggiPersegi-1){
        for (let j = 0; j < 2*tinggiPersegi-1; j++) {
            if (j%2==0){
                output += "*";
            } else {
                output += " "
            }
        }
        console.log(output)
    } else {
        for (let k = 0; k < 2*tinggiPersegi-1; k++) {
            if (k === 0 || k === 2*tinggiPersegi-2){
                output += "*"
            } else {
                output += " "
            }
        }
        console.log(output)
    }
}

console.log("\nPattern Segitiga Sama Kaki")
let tinggiSegitiga = 5
for (let i = 0; i < tinggiSegitiga; i++) {
    let output = "";
    for (let j = 0; j < tinggiSegitiga - i - 1; j++) {
        output += " ";
    }
    for (let k = 0; k < 2 * i + 1; k++) {
        if (k%2==0){
            output += "*";
        } else {
            output += " "
        }
    }
    console.log(output)
}