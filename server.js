import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import expressSession from 'express-session'
import cookieParser from 'cookie-parser'
import csrf from 'csurf'
import cors from 'cors'

import Actress from '~/server/controllers/Actress'
import Item from '~/server/controllers/Item'

const app = express()

// templates
// app.set('views', `${__dirname}/views`)
// app.set('view engine', 'ejs')

// middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan('dev'))
app.use(express.static(`${__dirname}/dist`))
app.use(cookieParser())
app.use(expressSession({
  secret: process.env.SESSION_SECRET || 'session secret',
  resave: false,
  saveUninitialized: false
}))
app.use(cors())
app.use(csrf())
// getAllApi()
app.options('*', function (req, res) {
  res.sendStatus(200)
})

app.get('/actress', (req, res) => {
  const actress = new Actress()
  actress
    .search(req.query)
    .then(results => res.send(results))
})

app.get('/item', (req, res) => {
  const item = new Item()
  item
    .search(req.query)
    .then(results => res.send(results))
})

app.listen(3000)
