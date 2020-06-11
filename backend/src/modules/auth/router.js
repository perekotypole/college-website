import uuid from 'uuid/v1'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import { /* hash, */ token } from '../../configs/auth'

import Admin from '../../models/auth/admin'
import RefreshToken from '../../models/auth/token'

async function generateToken(userID) {
  const refreshToken = uuid()

  RefreshToken.create({ userID, value: refreshToken })
    .then()
    .catch(() => ({
      error: 'Undefined error',
    }))

  const accessToken = await jwt.sign(
    { userID },
    token.access.secret,
    { expiresIn: `${token.access.time}m` },
  )

  return {
    access: accessToken,
    refresh: refreshToken,
  }
}

export default (router) => {
  // router.post('/signUp', async (req, res) => {
  //   const user = req.body
  //   const { password } = user

  //   const passwordHash = await bcrypt.hash(password, hash.hashSize)

  //   Admin.create({ ...user, password: passwordHash })
  //     .then(async (created) => res.json({
  //       created: !!created,
  //     }))
  //     .catch((error) => {
  //       res.json({
  //         error,
  //       })
  //     })
  // })

  router.post('/signIn', async (req, res) => {
    const { login, password } = req.body

    Admin.findOne({ login })
      .then(async (admin) => {
        const passwordIsCorrectly = await bcrypt.compare(password, admin.password)

        if (!passwordIsCorrectly) {
          return res.json({
            error: 'Password is incorrect',
          })
        }

        const tokens = await generateToken(admin._id)

        return res.json({
          signIn: !!admin,
          tokens,
        })
      })
      .catch((error) => {
        res.json({
          error,
        })
      })
  })

  router.post('/logOut', async (req, res) => {
    const admin = await RefreshToken.findOne({ value: req.body.token })

    if (!admin) {
      return res.json({
        error: 'Token is not valid',
      })
    }

    const deactivate = await RefreshToken.findOneAndDelete({ value: req.body.token })

    if (!deactivate) {
      return res.json({
        error: 'Token is not valida',
      })
    }

    return res.json({
      logOut: !!admin,
    })
  })

  router.post('/refresh', async (req, res) => {
    const admin = await RefreshToken.findOne({ value: req.body.token })

    if (!admin) {
      return res.json({
        error: 'Token is not valid',
      })
    }

    const deactivate = await RefreshToken.findOneAndDelete({ value: req.body.token })

    if (!deactivate) {
      return res.json({
        error: 'Token is not valida',
      })
    }

    const tokens = await generateToken(admin._id)

    return res.json({
      refreshed: !!admin,
      tokens,
    })
  })
}
