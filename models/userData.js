const { ObjectId } = require('mongodb')
const { getDatabase } = require('../config/mongodb')

class UserData {

  static findAll() {
    return(
      getDatabase()
        .collection('userData')
        .find()
        .toArray()
    ) 
  }

  static addUser(payload) {
    return(
      getDatabase()
        .collection('userData')
        .insertOne(payload)
    )
  }

  static updateUser(payload, id) {

    const o_id = new ObjectId(id)

    return(
      getDatabase()
        .collection('userData')
        .updateOne({ id : o_id }, { $set: payload })
    )
  }

  static deleteUser(id) {

    const o_id = new ObjectId(id)

    return(
      getDatabase()
        .collection('userData')
        .findOneAndDelete({ "_id": o_id })
    )

  }

}

module.exports = UserData