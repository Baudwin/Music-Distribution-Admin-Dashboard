const router = require('express').Router()
const {getServices}  = require('../controllers/serviceController')

router.get("/services", getServices)

module.exports = router