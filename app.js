const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generateTrashTalk = require('./generate_trashtalk')
const Handlebars = require('handlebars')
const app = express()
const port = 3000

//engine setting
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//setting body-parser
app.use(bodyParser.urlencoded({ extended: true }))

//setting handlebars helper
Handlebars.registerHelper('checkIfSame', function(occupation, currentOccupation, options) {
    if (occupation === currentOccupation) {
        return options.fn(this)
    } 
    return options.inverse(this)
})

//route setting
app.get('/', (req, res) => {
    res.render('index')
})

app.post('/', (req, res) => {
    // const options = req.body
    const occupation = req.body.occupation
    const trashtalk = generateTrashTalk(occupation)
    res.render('index', { trashtalk, occupation })
})

//start express server and listening for connections
app.listen(port, () => {
    console.log(`Express app are listening on port ${port}`)
})