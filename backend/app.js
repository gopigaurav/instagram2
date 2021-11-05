const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000

// middle ware 
// middle ware has 3 arguments next to proceed further
const customMiddleware = (req,res,next) => {
    console.log("middleware")
    next()
}
app.use(express.json())
app.use(customMiddleware)

app.get('/', (req,res) => {
    res.send("hello world")
})

app.listen(PORT, () => {
    console.log(`listening in port ${PORT}`)
})