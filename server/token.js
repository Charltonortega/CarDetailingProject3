const crypto = require('crypto');

// Generate a random secret token with a specified length (e.g., 32 characters)
const generateRandomSecret = (length) => {
  return crypto.randomBytes(length).toString('hex');
};

// Generate a 32-character (256-bit) random secret token
const secretToken = generateRandomSecret(32);

console.log('Generated Secret Token:', secretToken);
