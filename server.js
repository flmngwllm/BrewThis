const express = require("express")
const morgan = require("morgan")
const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended : true}))
app.use(express.static(`${__dirname}/client/build`))


app.get('/',  (req, res) => {
    res.send("Hello World")
  })



const PORT = process.env.PORT || 3001
app.listen(PORT, () =>{
    console.log(`Server is listening on PORT : ${PORT}`)
})