const router = require('express').Router()
const {getServices}  = require('../controllers/serviceController')
const authenticateJWT = require('../middleware/authenticateJwt')

router.get("/services", getServices)

module.exports = router