import express from 'express';
import { matchRouter } from '../src/routes/matches.js';

const app = express();
const PORT = 8000;

// Middleware
app.use(express.json());

// Root GET route
app.get('/', (req, res) => {
  res.send('Welcome to the Sportz API!');
});

app.use('/matches', matchRouter);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
