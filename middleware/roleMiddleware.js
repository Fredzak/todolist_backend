const jwt = require('jsonwebtoken');

// Middleware function to authenticate JWT token
const role = (req, res, next) => {
  // Get the token from the request header
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  // Verify the token
  jwt.verify(token, 'your-secret-key', (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid token' });
    }
if(decoded.firstName!="Haftom"){
return res.status(403).json({message:"sorry only haftom can add new user"})
}
    // Attach the decoded payload to the request object
    req.user = decoded;
    next();
  });
};

module.exports = role;