"use strict";
const fs = require('fs');
fs.stat('test.txt', (err, stats) => {
    if (err) {
        console.error(err);
    }
    // we have access to the file stats in `stats`
    console.log(stats);
});
