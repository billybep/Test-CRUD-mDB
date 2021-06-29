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

}

module.exports = UserData