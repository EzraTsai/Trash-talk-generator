const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generateTrashTalk = require('./generate_trashtalk')
const app = express()
const port = 3000

//engine setting
app.engine('handlebars', exphbs({ defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

//setting body-parser
app.use(bodyParser.urlencoded({ extended: true }))

//route setting
app.get('/', (req, res) => {
    res.render('index')
})

app.post('/', (req, res) => {
    const options = req.body
    const trashtalk = generateTrashTalk(options)
    res.render('index', { trashtalk: trashtalk, options: options })
})

//start express server and listening for connections
app.listen(port, () => {
    console.log(`Express app are listening on port ${port}`)
})