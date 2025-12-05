with open("example.txt", "r") as f:
    example = f.read()

with open("input.txt", "r") as f:
    input = f.read()



def solveOne(data):
    
    splitted = data.split("\n")
    splitted.pop() 
    # print(splitted)

    current = 50
    res = 0

    for i in splitted:
        direction = i[0]
        distance = i[1:]
        # print(direction, distance)

        for j in range(int(distance)):
            if direction == "L":
                current = current - 1

            if direction == "R":
                current += 1

            if current == -1:
                current = 99

            if current == 100:
                current = 0

        if current == 0:
            res += 1

    print(res)

# solveOne(example)
solveOne(input)

