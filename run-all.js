const fs = require('fs');
const path = require('path');

function runDirectory(directory) {
    fs.readdir(directory, (err, files) => {
        if (err) throw err;
        files.forEach(file => {
            if (file.endsWith('.js')) {
                console.log(`Running ${file} in ${directory}`);
                require(path.join(__dirname, directory, file));
            }
        });
    });
}

const directories = ['./very-easy', './easy', './medium', './hard'];
directories.forEach(runDirectory);
