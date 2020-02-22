const express = require('express')

const app = express()

app.use('/list', require('./routes/list'))

app.listen(process.env.PORT || 4000)
