const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'temp.txt');

fs.writeFile(filePath, 'This is temporary data.', (err) => {
  if (err){
    return console.error('Write error:', err);
  }

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err){
        return console.error('Read error:', err);
    }
    console.log('File content:', data);

    fs.unlink(filePath, (err) => {
      if (err){
        return console.error('Delete error:', err);
      }
      console.log('File deleted.');
    });
  });
});

