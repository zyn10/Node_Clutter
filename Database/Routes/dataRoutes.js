const express = require ('express')
const router = express.Router()
const dataController = require('../Controllers/dataController')

router.get('/',dataController,index)
router.post('/show',dataController.show)
router.post('/store',dataController.store)
router.post('/update',dataController.update)
router.post('/delete',dataController.destroy)

module.exports = router