const router = require('express').Router()
const {login}  = require('../controllers/adminController')

router.post("/login-admin", login)

module.exports = router