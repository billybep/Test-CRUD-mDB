const express = require('express')
const app = express()
const port = 3000
const userRoute = require('./routes/index')

const { connect } = require('./config/mongodb')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/users', userRoute)

// app.get('/', (req, res) => {
//   res.send('Heyyy')
// })

app.use((err, req, res, next) => {
  console.log(err,'error handler')
  
  switch (err.name) { 
    default: res.status(500).json({message: err.mesaage || 'Internal Server Error!'})
      break;
  }
})

connect()
  .then( _ => {
    console.log('connection to database success') 
    app.listen(port, _ => console.log(`CRUD app listening at http://localhost:${port}`))
  })
