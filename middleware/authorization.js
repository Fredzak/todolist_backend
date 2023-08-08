const jwt = require('jsonwebtoken');

// Middleware function to authenticate JWT token
const authMiddleware = (req, res, next) => {
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

    // Attach the decoded payload to the request object
    req.user = decoded;
    next();
  });
};

module.exports = authMiddleware;