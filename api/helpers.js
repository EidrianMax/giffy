const fs = require('fs/promises')

const getUsersFromJson = async () => {
  const usersJson = await fs.readFile('./users.json', 'utf-8')
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
