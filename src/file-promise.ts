async function fileReadMethod() {
  const fs = require('fs/promises')

  let fileHandle;
  try {
    fileHandle = await fs.open('test.txt', 'r');
    let buffer = await fileHandle.readFile();
    console.log(buffer.toString());
  } finally {
    if (fileHandle) {
      fileHandle.close();
    }
  }
}

fileReadMethod()