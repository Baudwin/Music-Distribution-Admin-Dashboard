const jwt = require('jsonwebtoken')
require('dotenv').config()

const Admin = [{
    _id: "01677888", 
    name: "Admin", 
    email: "admin@mail.com", 
    password: "admin123"
}]

module.exports = {
    login: async (req, res) => {
        const { email, password } = req.body
        
        // check if user with info provided exists 
        try {
        // check array if user with email exists 
        const result = Admin.find(admin=>admin.email === email)
            
        if (!result) {
            return res.status(400).json({msg:"Incorrect Email"})
        }

         if (result.password != password) {
                return res.status(400).json({msg:"Incorrect password"})
            }

          // if there is a match asign  token to that user 
          const token = jwt.sign({_id:result._id, email : result.email}, process.env.JWT_SECRET)
         const adminInfo = {
            _id:result._id, 
            email: result.email,
            token
        }
        res.status(200).json({ msg: "Sign In successful", adminInfo})
        }
         catch (error) {
            res.status(400).json(error.message)
        }
    },

}