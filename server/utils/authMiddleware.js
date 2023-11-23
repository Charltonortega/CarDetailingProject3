const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authMiddleware = async (req) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1]; 
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const currentUser = await User.findById(decoded.id);

      return { currentUser };
    } catch (err) {
      throw new Error('Invalid/Expired token');
    }
  }

  return { currentUser: null };
};

module.exports = authMiddleware;
