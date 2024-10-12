const fs = require('node:fs/promises');
const path = require('path');

// Define the path to the items.json file, ensuring it's relative to this module's location
const filePath = path.join(__dirname, 'items.json');

async function getStoredItems() {
  try {
    const rawFileContent = await fs.readFile(filePath, { encoding: 'utf-8' });
    const data = JSON.parse(rawFileContent);
    const storedItems = data.items ?? [];
    return storedItems;
  } catch (err) {
    if (err.code === 'ENOENT') {
      // If the file doesn't exist, return an empty array and create the file
      await storeItems([]); // Create an empty file
      return [];
    } else {
      // Re-throw other errors
      throw err;
    }
  }
}

function storeItems(items) {
  // Ensure we're writing the file to the correct path
  return fs.writeFile(filePath, JSON.stringify({ items: items || [] }, null, 2));
}

exports.getStoredItems = getStoredItems;
exports.storeItems = storeItems;
