import uuid from 'uuid/v1'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import { hash, token } from '../../configs/auth'

import verifyUser from '../../middlewares/verifyUser'

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
  //     .catch((error) =>
  //       res.json({
  //         error,
  //       })
  //     )
  // })

  router.post('/signIn', async (req, res) => {
    const { login, password } = req.body

    try {
      const admin = await Admin.findOne({ login })

      if (!admin) {
        return res.json({
          error: 'User is incorrect',
        })
      }

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
    } catch (error) {
      return res.json({
        errors: [
          error || { msg: 'Undefined error' },
        ],
      })
    }
  })

  router.post('/logOut', async (req, res) => {
    try {
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
    } catch (error) {
      return res.json({
        errors: [
          error || { msg: 'Undefined error' },
        ],
      })
    }
  })

  router.post('/refresh', async (req, res) => {
    try {
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
    } catch (error) {
      return res.json({
        errors: [
          error || { msg: 'Undefined error' },
        ],
      })
    }
  })

  router.post('/changePassword', verifyUser, async (req, res) => {
    const { login, newPassword, oldPassword } = req.body

    try {
      const user = await Admin.findOne({ login })

      if (!user) {
        return res.json({
          error: 'User is incorrect',
        })
      }

      const passwordIsCorrectly = await bcrypt.compare(oldPassword, user.password)

      if (!passwordIsCorrectly) {
        return res.json({
          error: 'Password is incorrect',
        })
      }

      const passwordHash = await bcrypt.hash(newPassword, hash.hashSize)

      await user.updateOne({ password: passwordHash })

      return res.json({
        user,
      })
    } catch (error) {
      return res.json({
        errors: [
          error || { msg: 'Undefined error' },
        ],
      })
    }
  })
}
