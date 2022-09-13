// create a nest js function so we can examine var scope
function parent() {
    let message = 'Hello world'

    function child() {
        //let message = 'Hello from child'
        //message = 'I am different now'
        console.log(message)
    }

    child()
}

// call the parent function
parent()