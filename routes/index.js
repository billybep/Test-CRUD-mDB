const router = require('express').Router()
const CtrlUserData = require('../controllers/ctrlUserData')
const authenticate = require('../middlewares/auth')

router.use(authenticate)
router.get('/', CtrlUserData.findAll)
router.post('/', CtrlUserData.addUser)
router.get('/:idNumber', CtrlUserData.findOne)
router.put('/:id', CtrlUserData.updateUser)
router.delete('/:id', CtrlUserData.deleteUser)

module.exports = router