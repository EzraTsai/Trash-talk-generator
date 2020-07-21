const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000

//engine setting
app.engine('handlebars', exphbs({ defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

//route setting
app.get('/', (req, res) => {
    res.render('index')
})

//start express server and listening for connections
app.listen(port, () => {
    console.log(`Express app are listening on port ${port}`)
})