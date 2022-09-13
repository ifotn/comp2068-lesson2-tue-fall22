function parent() {
    let message = 'Hello world'

    function child() {
        console.log(message)
    }

    return child // omit brackets so this doesn't execute yet
}

// instantiate 
let childFunction = parent()

// run
childFunction()