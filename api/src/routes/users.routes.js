import { Router } from 'express'

const userRoute = Router()

userRoute.get('/', (req, res) => {
  res.status(200).json('users root')
})

export default userRoute
