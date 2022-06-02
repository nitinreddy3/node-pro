const fs = require('fs');

fs.stat('/Users/nitin/test.txt', (err: any, stats: any) => {
  if (err) {
    console.error(err);
  }
  // we have access to the file stats in `stats`
});