const router = require('express').Router()
const {downloadAsCsv, downloadAsPdf}  = require('../controllers/downloadsController')
const authenticateJWT = require('../middleware/authenticateJwt')


router.get("/download-pdf", downloadAsPdf)
router.get("/download-csv", downloadAsCsv)

module.exports = router