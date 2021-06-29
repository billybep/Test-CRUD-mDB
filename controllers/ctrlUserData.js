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

  static async addUser(req, res, next) {
    try {

      const newUser = {
        username      : req.body.username,
        email         : req.body.email,
        accountNumber : req.body.accountNumber,
        identityNumber: req.body.identityNumber
      }

      const user = await UserData.addUser(newUser)
      res.status(201).json(user)

    } catch (error) {
      next(error)
    }
  }

  static async updateUser(req, res, next) {
    try {
      
      const dataUser = {
        username      : req.body.username,
        email         : req.body.email,
        accountNumber : req.body.accountNumber,
        identityNumber: req.body.identityNumber
      }

      const id = req.params.id
      await UserData.updateUser(dataUser, id)
      res.status(200).json({ message: 'Updated Success!' })

    } catch (error) {
      next(error)
    }
  }

  static async deleteUser(req, res, next) {
    try {
      
      const id = req.params.id
      const deleteUser = await UserData.deleteUser(id)
      res.status(200).json(deleteUser)

    } catch (error) {
      next(error)
    }
  }

  static async findOne(req, res, next) {
    try {

      const id = req.params.id
      const found = await UserData.findOne(id)
      res.status(200).json(found)

    } catch (error) {
      next(error)
    }
  }

}

module.exports = CtrlUserData