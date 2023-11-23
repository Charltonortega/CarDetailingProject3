const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Import your GraphQL type definitions and resolvers
const typeDefs = require('./schema/typeDefs');
const resolvers = require('./schema/resolvers');

const app = express();

app.use((req, res, next) => {
  console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url}`);
  next();
});

// Enable CORS
app.use(cors());

// Connect to MongoDB
const mongoURI = 'mongodb://127.0.0.1:27017/car-rental-app';

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

  
// Create an instance of Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Start the Apollo Server
async function startApolloServer() {
  await server.start();

// Apply Apollo Server as middleware to your Express app
  server.applyMiddleware({ app });

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(`Error: ${err.message}`);
  res.status(500).json({ error: 'Something went wrong!' });
});

  // Set the port for your server
  const PORT = process.env.PORT || 4000;

  // Start the server
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/graphql`);
  });
}

startApolloServer();
