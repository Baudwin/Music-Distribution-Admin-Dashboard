const express = require("express")
const app = express()

const earningsRoute = require("../routes/earnings")
const servicesRoute = require("../routes/services")
const reportRoute = require('../routes/downloads')
const adminRoute = require("../routes/admin")

const cors = require('cors')

const is_production = process.env.NODE_ENV === 'production' 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('dotenv').config()
const port  = process.env.PORT || 4000

app.use(cors({
    origin:[ is_production ?  "https://music-distribution-admin-dashboard.vercel.app": "http://localhost:3000"],
    methods:['POST','GET','PUT','DELETE'],
    credentials:true
}))

app.use(earningsRoute);
app.use(servicesRoute);
app.use(reportRoute)
app.use(adminRoute)


app.listen(port, ()=>{
console.log(`server running on port ${port}`)
})
