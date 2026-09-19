/**
 * mygrep is my version of the Linux grep command
 * The way to execute:
 * node mygrep.js <PATTERN> <FILENAME>
 * 
 */
const fs = require('fs');
const path = require('path');

if (process.argv.length !== 4){

  console.log('Missing argument');
  console.log(`Usage: node ${Path2D.basename(process.argv[1])} <PATTERN> <FILENAME>`)
}

let filename = process.argv[3];
let pattern = process.argv[2];

let content = fs.readFileSync(filename, 'utf-8');

let lines = content.split('\n');
for (let line of lines){
  if (line.includes(pattern)){
    console.log(line);
  }
}