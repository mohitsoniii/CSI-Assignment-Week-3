const fs = require('fs').promises;
const path = require('path');

const filePath = path.join(__dirname, 'temp.txt');

fs.writeFile(filePath, 'This is temporary data.')
  .then(() => fs.readFile(filePath, 'utf8'))
  .then(data => {
    console.log('File content:', data);
    return fs.unlink(filePath);
  })
  .then(() => {
    console.log('File deleted.');
  })
  .catch(err => {
    console.error('Error:', err);
  });
