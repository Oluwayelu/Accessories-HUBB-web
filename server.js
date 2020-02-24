const express = require('express')
const passport = require('passport')
const mongoose = require('mongoose')
const path = require('path')
const cors = require('cors')

const category = require('./routes/categories')
const product = require('./routes/products')
const order = require('./routes/orders')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors())
app.use(passport.initialize())

const db = require('./config/keys').mongoURI
mongoose.connect(db, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true}, () => {
    console.log("MongoDB connected...")
})

app.use('/categories', category)
app.use('/products', product)
app.use('/orders', order)

if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }

const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})