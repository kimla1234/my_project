const express = require('express')
const app = express()

app.use(express.json())

const product =require('./src/route/product.route')
product(app)


app.listen(8080,()=>{
    console.log('localhost:8080')
})