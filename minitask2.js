let tinggi = 5
console.log("Segitiga Siku Siku dengan For")
let bintang1 = ""
for (let i=tinggi; i > 0; i--){
    for (let j=i; j >= i; j--){
        bintang1 += "*"
        console.log(bintang1)
    }
}

console.log("\nSegitiga Siku Siku dengan Do While")
let bintang2 = ""
let i = tinggi //5
do {
    let j = i
    do {
        bintang2 += "*"
        console.log(bintang2)
        j--
    } while (j>=i);
    i--
} while (i>0);
let tinggi = 5
console.log("Segitiga Siku Siku dengan For")
let bintang1 = ""
for (let i=tinggi; i > 0; i--){
    for (let j=i; j >= i; j--){
        bintang1 += "*"
        console.log(bintang1)
    }
}

console.log("\nSegitiga Siku Siku dengan Do While")
let bintang2 = ""
let i = tinggi //5
do {
    let j = i
    do {
        bintang2 += "*"
        console.log(bintang2)
        j--
    } while (j>=i);
    i--
} while (i>0);