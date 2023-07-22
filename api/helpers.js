const fs = require('fs/promises')
const path = require('node:path')

const filePath = path.join(__dirname, 'users.json')

const getUsersFromJson = async () => {
  const usersJson = await fs.readFile(filePath, 'utf-8')
  const users = JSON.parse(usersJson)

  return users
}

const getToken = (req) => {
  const authorization = req.headers.authorization
  const [, token] = authorization.split(' ')

  return token
}

module.exports = {
  getUsersFromJson,
  getToken
}
