/**
 * myhead is my version of the Linux head command
 * The way to execute:
 * node myhead.js <FILENAME>
 * 
 */
const fs = require('fs');
const path = require('path');

if (process.argv.length !== 3){

  console.log('Missing argument');
  console.log(`Usage: node ${path.basename(process.argv[1])} <FILENAME>`);
}

let filename = process.argv[2];

let content = fs.readFileSync(filename, 'utf-8');

let lines = content.split('\n');

for (let i = 0; i<10; i++){
    console.log(lines[i]); 
}