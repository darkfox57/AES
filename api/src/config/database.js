import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const namebd = process.env.DB_DATABASE
const userbd = process.env.DB_USERNAME
const passbd = process.env.DB_PASSWORD
const connec = process.env.DB_CONNECTION

const url = `${connec}+srv://${userbd}:${passbd}@cluster0.flegvck.mongodb.net/${namebd}?retryWrites=true&w=majority`

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('connected to the database  successfully '))
  .catch((err) => console.log(err))
