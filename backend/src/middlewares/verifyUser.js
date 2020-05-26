import jwt from 'jsonwebtoken'

import { token as tokenInfo } from '../configs/auth'

export default async (req, res, next) => {
  // const { authorization } = req.headers
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI1ZWNhYjMzMjU1ZmIyZjE1MzRlY2Y5NTgiLCJpYXQiOjE1OTA0MTgwODMsImV4cCI6MTU5MDQxOTI4M30.4LGt2tJ3RKhR_8eDWJsIMUxRV9hVnswa5lyGj4XnF3o'

  // if (!authorization) {
  //   return res.status(401).json({
  //     errors: {
  //       msg: 'No access token provided',
  //     },
  //   })
  // }

  const { secret } = tokenInfo.access

  // const [, token] = authorization.split(' ')

  try {
    req.user = await jwt.verify(token, secret)

    return next()
  } catch (error) {
    return res.json({
      errors: [
        error,
      ],
    })
  }
}
