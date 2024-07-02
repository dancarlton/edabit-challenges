# Edabit Challenges

This repository contains my solutions to various Edabit coding challenges. Each challenge file includes a function and `console.log` statements for testing.

## Running All Challenges

To run and test all challenges at once, use the `run-all.js` script. This script automatically finds and executes all JavaScript files in the challenge directories within the terminal in VS Code.

### Usage

1. **Clone the Repository**:
    ```sh
    git clone <your-repo-url>
    cd <your-repo-name>
    ```
2. **Ensure Node.js is Installed**:
    - Download and install Node.js from [Node.js](https://nodejs.org/).

3. **Run the Script**:
    ```sh
    node run-all.js
    ```

### `run-all.js` Script

```javascript
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

const directories = ['./beginner', './intermediate', './advanced'];
directories.forEach(runDirectory);
