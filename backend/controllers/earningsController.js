const earnings = require("../mockDB/dummyEarnings")

module.exports = {

getEarnings : async(req,res)=>{
    try {
      res.json(earnings)  
    } 
    catch (error) {
        res.send(error)
    }
    
    }, 

}