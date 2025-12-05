const fs = require("fs"); 
const example = fs.readFileSync(__dirname + "/example.txt").toString()
const input = fs.readFileSync(__dirname + "/input.txt").toString()
// console.log(solveOne(example)) 
// console.log(solveOne(input)) 
// console.log(solveTwo(example)) 
console.log(solveTwo(input)) 

function solveOne(input){    
    let ranges = input.split("\n").join("").split(",")
    let res = 0
    for(let i=0; i<ranges.length ; i++){
        let [start, end] = ranges[i].split("-")
        start = Number(start)
        end = Number(end)

        for(let j=start; j<=end; j++){
            j = String(j)
            if((j.length)%2 === 0){
                let firstHalf = j.slice(0, j.length/2)
                let secondHalf = j.slice(j.length/2)
                if(firstHalf === secondHalf){
                    res += Number(j)
                }
            }
        }
        
    }
    return res
}


function solveTwo(kiwi) {
    let ranges = kiwi.split("\n").join("").split(",")
    let res = 0
    for (let range of ranges) {
        let [start, end] = range.split("-")
        start = Number(start)
        end = Number(end)
        for (let j = start; j <= end; j++) {
            let found = false
            let id = j
            id = String(id)
            for (let k = 0; k < id.length; k++) {
                let pattern = id.slice(0, k)
                let test_id = ""
                for (let i = 0; i < 100; i++) {
                    test_id += pattern
                    if (test_id === id) {
                        res += Number(id)
                        found = true
                    }
                }

                if (found) {
                    break
                }
            }

        }

    }
    return res
}