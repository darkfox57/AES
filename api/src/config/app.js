import express from 'express'
import morgan from 'morgan'
import routes from '../routes/index'

const server = express()

server.use(morgan('dev'))
server.use(express.json())
server.use('/', routes)

export default server
