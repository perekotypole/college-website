import jwt from 'jsonwebtoken'

import { token as tokenInfo } from '../configs/auth'

export default async (req, res, next) => {
  const { authorization } = req.headers
  const [, token] = authorization.split(' ')

  if (!authorization || token === 'undefined') {
    return res.status(401).json({
      errors: {
        msg: 'No access token provided',
      },
    })
  }

  const { secret } = tokenInfo.access

  try {
    req.user = await jwt.verify(token, secret)

    return next()
  } catch (error) {
    return res.json({
      accessTokenExpired: true,
      errors: [
        error,
      ],
    })
  }
}
