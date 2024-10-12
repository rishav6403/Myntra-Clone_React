import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url'; // Import for ES module __dirname equivalent

const PORT = process.env.PORT || 8080;

// Middleware for parsing JSON bodies
const app = express();
app.use(bodyParser.json());

// Static file serving from the React build directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, '../Myntra-Clone-React/dist'))); // Adjust path as necessary

// Route to serve the index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../Myntra-Clone-React/dist/index.html')); // Adjust path as necessary
});

// CORS Middleware
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Sample API endpoints
app.get('/items', async (req, res) => {
  const storedItems = await getStoredItems();
  await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate delay
  res.json({ items: storedItems });
});

app.get('/items/:id', async (req, res) => {
  const storedItems = await getStoredItems();
  const item = storedItems.find((item) => item.id === req.params.id);
  res.json({ item });
});

app.post('/items', async (req, res) => {
  const existingItems = await getStoredItems();
  const itemData = req.body;
  const newItem = {
    ...itemData,
    id: Math.random().toString(),
  };
  const updatedItems = [newItem, ...existingItems];
  await storeItems(updatedItems);
  res.status(201).json({ message: 'Stored new item.', item: newItem });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
