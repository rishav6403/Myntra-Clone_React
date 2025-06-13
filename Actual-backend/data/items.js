const fs = require('node:fs/promises');
const path = require('path');

const filePath = path.join(__dirname, 'items.json');

async function getStoredItems() {
  try {
    const rawFileContent = await fs.readFile(filePath, { encoding: 'utf-8' });
    const data = JSON.parse(rawFileContent);
    const storedItems = data.items ?? [];
    return storedItems[0] ?? [];
  } catch (err) {
    if (err.code === 'ENOENT') {
      await storeItems([]);
      return [];
    } else {
     
      throw err;
    }
  }
}

function storeItems(items) {

  return fs.writeFile(filePath, JSON.stringify({ items: items || [] }, null, 2));
}

exports.getStoredItems = getStoredItems;
exports.storeItems = storeItems;
