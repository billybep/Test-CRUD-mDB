const router = require('express').Router()
const CtrlUserData = require('../controllers/ctrlUserData')

router.get('/', CtrlUserData.findAll)

module.exports = router