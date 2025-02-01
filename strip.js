// ? This is a node.js script for stripping down the index.html to be more minimal and harder to tell what its goal is just by looking at someones screen.

// Import some built-in node.js packages for dealing with files.
const fs = require('fs')
const path = require('path')

// Get the base index.html content's so we can strip it down.
let html = fs.readFileSync(path.resolve("./index.html")).toString()

// All that good ol' regex matching magic using some home grown regex.
html = html
    // .replace(/<title>[\s\S]*?<\/style>/, "") // Remove all the stuff in the range from the title opening tag to the style closing tag. 
    .replace(/<h.>.*?<\/h.>/g, "") // Remove headers
    .replace(/<img.*?>/g, "") // Remove img elements
    .replace(/<p>[\s\S]*?<\/p>/g, "") // Remove paragraph elements
    .replace(/<label[\s\S]*?>[\s\S]*?<\/label>/g, "") // Remove label elements
    .replace(">Hang Extension!</button>", ">Start!</button>") // Changes wording of kill extension button to be less obvious to someone just glancing at a user's screen.
    .replace(">Kill Extension!</button>", ">Finish!</button>") // Changes wording of kill extension button to be less obvious to someone just glancing at a user's screen.

// Write the now stripped down HTML to a new file.  
fs.writeFileSync(path.resolve("./stripped.html"), html)