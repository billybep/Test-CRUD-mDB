const UserData = require('../models/userData')

class CtrlUserData {
  static async findAll(req, res, next) {
    try {
      const users = await UserData.findAll()
      res.status(200).json(users)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = CtrlUserData