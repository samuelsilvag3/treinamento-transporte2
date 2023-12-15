const express=require('express')
const app=express()
app.use(express.json())

app.get('/helloworld', (req, res) => {
    console.log('Endpoint Hello World')
    res.status(201).send('Hello World')
})

app.listen(4000, () => {
    console.log('Endpoint Hello Wolrd Porta: 4000')
})