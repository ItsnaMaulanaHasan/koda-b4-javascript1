let line = ""
for (let i=5; i > 0; i--){
    for (let j=i; j > i-1; j--){
        line += "*"
        console.log(line)
        console.log(j)
    }
}