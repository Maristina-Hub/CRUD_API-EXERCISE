const express = require('express')
const cors = require('cors')
const client = require('./database/database')
const student = require('../routes/student')

const app = express()
const port = process.env.PORT || 8000

app.use(cors())
app.use(express.json())

client.connect()

app.use('/', student)
app.use('/student/add', student)
app.use('/student/:id', student)



app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
})