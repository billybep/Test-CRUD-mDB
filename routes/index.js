const router = require('express').Router()
const CtrlUserData = require('../controllers/ctrlUserData')

router.get('/', CtrlUserData.findAll)
router.post('/', CtrlUserData.addUser)
router.put('/:id', CtrlUserData.updateUser)
router.delete('/:id', CtrlUserData.deleteUser)

module.exports = router