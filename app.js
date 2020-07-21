const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
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
    res.render('index')
    console.log('req.body', req.body)
})

//start express server and listening for connections
app.listen(port, () => {
    console.log(`Express app are listening on port ${port}`)
})