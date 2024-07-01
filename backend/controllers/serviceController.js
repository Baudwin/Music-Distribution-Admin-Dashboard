const services = require("../mockDB/dummyServices")

module.exports = {

getServices : async(req,res)=>{
    
    try {
        res.json(services)
      
      } catch (error) {
          res.send(error)
      }
    }, 

}