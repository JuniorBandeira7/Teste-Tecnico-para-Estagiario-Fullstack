const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())

// Resolver prolema de CORS
app.use(cors({credentials: true, origin: 'http://localhost:3000'}))

const UserRoutes = require('./routes/UserRoutes')
const TaskRoutes = require('./routes/TaskRoutes')

app.use('/users', UserRoutes)
app.use('/tasks', TaskRoutes)

app.listen(5000)