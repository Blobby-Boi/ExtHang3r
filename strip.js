// ? This is a node.js script for stripping down the index.html to be more minimal and harder to tell what its goal is just by looking at someones screen.

// Import some built-in node.js packages for dealing with files.
const fs = require('fs')
const path = require('path')

// Get the base index.html content's so we can strip it down.
let html = fs.readFileSync(path.resolve("./index.html")).toString()

// Write the now stripped down HTML to a new file.  
fs.writeFileSync(path.resolve("./stripped.html"), html)