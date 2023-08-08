const users = require("../models/userModels")
const jwt = require("jsonwebtoken");
const auth = async (req,res)=>{
  const { username, password } = req.body;
  // Find user by username and password
  const user = await users.findOne({firstName:username,middleName:password});

  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  // Generate JWT token
  const token = jwt.sign({ id: user.id,firstName:user.firstName }, 'your-secret-key');

  res.json({ token });
}

module.exports = {auth}