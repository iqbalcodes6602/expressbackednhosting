import express from 'express'

const app = express()

app.use("/", (req, res) => {
    res.json({ message: "Hello from express app in bakcend"})
})

const port = 9000

app.listen(9000, () => {
    console.log(`starting server on port 9000 or port ${port}`)
})