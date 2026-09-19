/**
 * FindFirst.js is my version of the combining Linux grep and head commands
 * The way to execute:
 * node FindFirst.js <PATTERN> <FILENAME> [NUBMEROFLINES]
 * 
 */
const fs = require('fs');
const path = require('path');

if (process.argv.length !== 5){

  console.log('Missing argument');
  console.log(`Usage: node ${Path2D.basename(process.argv[1])} <PATTERN> <FILENAME> [NUBMEROFLINES]`);
}

let filename = process.argv[3];
let pattern = process.argv[2];
let numberOfLines = process.argv[4];

let content = fs.readFileSync(filename, 'utf-8');

let lines = content.split('\n');

for (let i=0; i < numberOfLines && i < lines.length; i++){
  if (lines[i].includes(pattern)){
    console.log(lines[i]);
  }
}