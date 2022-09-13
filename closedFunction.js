function closedFunction() {
    let counter = 0

    let increment = () => {
        counter++
        console.log(counter)
    }

    return increment
}

// set up ("instantiate") function
let myCountFunction = closedFunction()

//execute twice
myCountFunction()
myCountFunction()