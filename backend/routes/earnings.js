const router = require('express').Router()
const {getEarnings}  = require('../controllers/earningsController')


router.get("/earnings", getEarnings)

module.exports = router