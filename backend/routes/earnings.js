const router = require('express').Router()
const {getEarnings}  = require('../controllers/earningsController')
const authenticateJWT = require('../middleware/authenticateJwt')


router.get("/earnings", getEarnings)

module.exports = router