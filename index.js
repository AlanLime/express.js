const express = require('express')
const app = express()
const port = 3000
//npm i ejs
app.set('view engine','ejs');

app.set('views','./views');

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/courses', (req, res) => {
    res.render('pages/courses')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})