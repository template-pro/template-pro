#!/usr/bin/env node

// TODO
const pkg = require('./package.json');

function main() {
  console.log(`Welcome ${pkg.name}@${pkg.version}`); 
};

main();