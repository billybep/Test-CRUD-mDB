const { MongoClient } = require("mongodb")

let db = null

async function connect() {
  try {
    const uri = 'mongodb://localhost:27017'
    const client = new MongoClient(uri, { useUnifiedTopology: true })
    await client.connect()
    const database = await client.db('userdata')
    db = database
    return database
  } catch (error) {
    console.log(error)
  }   
}

const getDatabase = _ => {
  return db
}

module.exports = { connect, getDatabase }