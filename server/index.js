const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
const port = 3000

app.use(cors())

const users = [
  { id: 1, name: "Leidys", age: 27 },
  { id: 2, name: "Jose", age: 29 },
  { id: 3, name: "Antonio", age: 29 },
]

app.get('/', (req, res) => {
  return res.send('hello world')
})

app.get('/users', (req, res) => {
  return res.status(200).json(users)
})

app.post('/users', 
  (req, res, next) => {
    console.log({authorization: req.headers.authorization});
    if (req.headers.authorization) {
      next()
    } else {
      return res.status(401).json({message: "ERROR: El usuario no ha iniciado sesión."})
    }
  },
  (req, res) => {
    console.log(req.body)
    users.push({
      id: users.length + 1,
      name: req.body.name,
      age: req.body.age,
    })
    return res.status(200).json({message: "El usuario ha sido creado exitosamente."})
  }
)

app.get('/users/:userId', (req, res) => {
  return res.send(req.params)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})