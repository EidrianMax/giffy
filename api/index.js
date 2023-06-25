const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const fs = require('fs/promises')
const cors = require('cors')
const { getUsersFromJson, getToken } = require('./helpers.js')
const path = require('node:path')

const filePath = path.join(__dirname, 'users.json')

const app = express()
app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 8001
const JWT_SECRET = 'shhhh'
const JWT_EXPIRES_IN = '1d'
const BCRYPT_ROUND_SALTS = 10

app.get('/', (req, res) => {
  res.send('Hello')
})

app.post('/api/users', async (req, res) => {
  try {
    const { username, password } = req.body

    const users = await getUsersFromJson()

    const isUserInJson = users.some(user => user.username === username)

    if (isUserInJson) {
      return res.status(400).json({
        error: `user already exist with that username ${username}`
      })
    }

    const usersIds = users.map(user => user.id)
    const maxId = Math.max(...usersIds)

    const user = {
      id: maxId + 1,
      username,
      password: bcrypt.hashSync(password, BCRYPT_ROUND_SALTS),
      favs: []
    }

    const newUsers = [...users, user]

    await fs.writeFile(filePath, JSON.stringify(newUsers))

    res.status(200).json({
      id: user.id,
      username: user.username
    })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

app.post('/api/users/auth', async (req, res) => {
  const { username, password } = req.body

  try {
    const users = await getUsersFromJson()

    const user = users.find(user => user.username === username)

    const isPasswordIsFine = user
      ? await bcrypt.compare(password, user.password)
      : false

    if (!(user && isPasswordIsFine)) {
      return res.status(400).json({
        error: 'credentials are wrong'
      })
    }

    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN })

    res.send({ token })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

app.get('/api/users/favs', async (req, res) => {
  const token = getToken(req)

  try {
    const { id: userId } = jwt.verify(token, JWT_SECRET)

    const users = await getUsersFromJson()

    const user = users.find(user => user.id === userId)

    if (!user) {
      res.status(400).json({ error: 'user not found' })
    }

    res.status(200).json({
      favs: user.favs
    })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

app.post('/api/users/favs/:favId', async (req, res) => {
  const favId = req.params.favId

  const token = getToken(req)

  try {
    const { id: userId } = jwt.verify(token, JWT_SECRET)

    const users = await getUsersFromJson()

    const user = users.find(user => user.id === userId)

    if (!user) {
      return res.status(400).json({ error: 'user not found' })
    }

    const isFavIdInArray = user.favs.some(fav => fav === favId)

    if (isFavIdInArray) {
      return res.status(400).json({ error: `${favId} is already in favs` })
    }

    user.favs = [...user.favs, favId]

    const newUsers = users.map(user_ => {
      if (user_.id === user.id) {
        return user
      } else {
        return user_
      }
    })

    await fs.writeFile(filePath, JSON.stringify(newUsers))

    res.status(200).json({
      favs: user.favs
    })
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
})

app.delete('/api/users/favs/:favId', async (req, res) => {
  const favId = req.params.favId

  const token = getToken(req)

  try {
    const { id: userId } = jwt.verify(token, JWT_SECRET)

    const users = await getUsersFromJson()

    const user = users.find(user => user.id === userId)

    if (!user) {
      res.status(400).json({ error: 'user not found' })
    }

    const isFavIdInFavs = user.favs.some(fav => fav === favId)

    if (!isFavIdInFavs) {
      return res.status(400).json({ error: `There is no id with ${favId} in favs` })
    }

    const favsWithOutFavId = user.favs.filter(fav => fav !== favId)

    user.favs = favsWithOutFavId

    const newUsers = users.map(user_ => {
      if (user_.id === user.id) {
        return user
      } else {
        return user_
      }
    })

    await fs.writeFile(filePath, JSON.stringify(newUsers))

    res.status(200).json({
      favs: user.favs
    })
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
})

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`)
})

module.exports = {
  app
}
