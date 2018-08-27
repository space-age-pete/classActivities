const fs = require('fs');

fs.unlink('./seppuku.js', (err) => {
    if (err) throw err;
    console.log('successfully deleted myself');
});