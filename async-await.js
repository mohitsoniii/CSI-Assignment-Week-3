const fs = require('fs').promises;
const path = require('path');

const filePath = path.join(__dirname, 'temp.txt');

async function manageFile() {
  try {
    await fs.writeFile(filePath, 'This is temporary data.');

    const data = await fs.readFile(filePath, 'utf8');

    console.log('File content:', data);

    await fs.unlink(filePath);
    console.log('File deleted.');
    
  } catch (err) {
    console.error('Error:', err);
  }
}

manageFile();
