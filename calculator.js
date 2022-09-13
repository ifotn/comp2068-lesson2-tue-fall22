// use http module as web server
const http = require('http')

// use url module to read url params
const url = require('url')

// use accounting npm package we installed to format numbers as currency
const accounting = require('accounting')

// start server on port 3000
http.createServer((req, res) => {
    res.writeHead(200)
    res.write('<h2>Tax Calculator</h2>')

    // use url module to read url params (the part after the ?)
    const query = url.parse(req.url, true).query

    // parse the subtotal value from the url params
    let subTotal = query.subtotal
    res.write('<p>Sub Total: ' + accounting.formatMoney(subTotal) + '</p>')

    // calc & display tax
    let tax = subTotal * 0.13
    //res.write('<p>Tax: ' + tax + '</p>')
    res.write(`<p>Tax: ${accounting.formatMoney(tax)}</p>`)

    // total
    let total = parseFloat(subTotal) + parseFloat(tax)
    res.write(`<p>Total: ${accounting.formatMoney(total)}</p>`)

    res.end()
}).listen(3000)

console.log('Server running')