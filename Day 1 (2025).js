const fs = require("fs"); 
const example = fs.readFileSync(__dirname + "/example.txt").toString() // 3
const input = fs.readFileSync(__dirname + "/input.txt").toString() // 1036
// solveOne(example)
console.log(solveTwo(input))


function solveOne(input){
    let lines = input.split("\n")
    if (lines[lines.length - 1] === "") {
        lines.pop()
    }

    let array1 = []

    for(let char of lines){
        let direction = char[0]
        let distance = char.slice(1)

        array1.push({direction: direction, distance: Number(distance)})
    }

    current = 50
    let results = []

    for(let rotation of array1){
        
        if(rotation.direction === 'L'){
            current -= rotation.distance
            while(current<0){
                current = 100+current

            }
            results.push(current)
        }
        
        else{
            current += rotation.distance
            while(current>99){
                current = current-100
            }
            results.push(current)
        }
    }

    let res = results.filter(element => element === 0).length
    console.log(res)
}

function solveTwo(input){
    let lines = input.split("\n")
    if (lines[lines.length - 1] === "") {
        lines.pop()
    }

    let instructions = []

    for(let char of lines){
        let direction = char[0]
        let distance = char.slice(1)
        instructions.push({direction: direction, distance: Number(distance)})
    }
    
    current = 50
    let res = 0
    for(let {direction, distance} of instructions){
        // let {direction, distance} = instruction
        // direction = instruction.direction
        // distance = instruction.distance
        for(let i=0 ; i<distance ; i++){
            if(direction === "L") current--
            if(direction === "R") current++
            if(current === 100) current = 0
            if(current === -1) current = 99
            if(current === 0) res++
        }      
    }
            return res
}







