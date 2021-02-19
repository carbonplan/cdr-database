const jwt = require('jsonwebtoken')
const safeCompare = require('safe-compare')

const secret = process.env.JWT_SECRET

const users = [
  {
    username: 'admin',
    password: process.env.ADMIN_PASSWORD,
  },
  {
    username: 'microsoft',
    password: process.env.MSFT_PASSWORD,
  }
]

export default function handler(req, res) {
  if (req.method === 'POST') {
    const user = users.find((d) => safeCompare(d.password, req.body.password))
    if (user) {
      const token = jwt.sign({ username: user.username }, secret, {
        expiresIn: '24h',
      })
      res.status(200).json({ username: user.username, token: token })
    } else {
      res.status(403).json({ message: 'password not recognized' })
    }
  }

  if (req.method === 'GET') {
    if (process.env.AUTH_OVERRIDE) {
      res.status(200).json({ username: 'admin', authed: true })
    } else {
      const token = req.headers.authorization
      try {
        var decoded = jwt.verify(token, secret)
        res.status(200).json({ username: decoded.username, authed: true })
      } catch (err) {
        res.status(403).json({ authed: false })
      }
    }
  }
}
