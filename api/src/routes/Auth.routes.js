import { Router } from 'express'

const authRoute = Router()

authRoute.get('/', (req, res) => {
  res.status(200).json('respondiendo a auth')
})
export default authRoute
