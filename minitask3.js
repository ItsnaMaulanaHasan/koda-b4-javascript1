console.log("Pattern Persegi")
let tinggiPersegi = 5
for (let i = 0; i < tinggiPersegi; i++) {
    let output = ""
    if (i === 0 || i === tinggiPersegi-1){
        for (let j = 0; j < tinggiPersegi; j++) {
            output += "* ";
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
        if (k%2 === 0){
            output += "*";
        } else {
            output += " "
        }
    }
    console.log(output)
}

console.log("\nPattern Labyrinth")
for (let i = 0; i < 5; i++) {
    let output = ""
    if (i % 2 === 0){
        for (let j = 0; j < 6; j++) {
            output += "* "
        }
        console.log(output)
    } else {
        for (let k = 0; k < 11; k++){
            if (i === 1 && k === 8){
                output += "*"
            } else if (k === 10) {
                output += "*"
            } else {
                output += " "
            }
        }
        console.log(output)
    }
}
console.log("Pattern Persegi")
let tinggiPersegi = 5
for (let i = 0; i < tinggiPersegi; i++) {
    let output = ""
    if (i === 0 || i === tinggiPersegi-1){
        for (let j = 0; j < tinggiPersegi; j++) {
            output += "* ";
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
        if (k%2 === 0){
            output += "*";
        } else {
            output += " "
        }
    }
    console.log(output)
}

console.log("\nPattern Labyrinth")
for (let i = 0; i < 5; i++) {
    let output = ""
    if (i % 2 === 0){
        for (let j = 0; j < 6; j++) {
            output += "* "
        }
        console.log(output)
    } else {
        for (let k = 0; k < 11; k++){
            if (i === 1 && k === 8){
                output += "*"
            } else if (k === 10) {
                output += "*"
            } else {
                output += " "
            }
        }
        console.log(output)
    }
}