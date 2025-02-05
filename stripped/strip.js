// ? This is a node.js script for stripping down the index.html to be more minimal and harder to tell what its goal is just by looking at someones screen.

// Import some built-in node.js packages for dealing with files.
const fs = require('fs')
const path = require('path')

// Get the base index.html content's so we can strip it down.
let html = fs.readFileSync(path.resolve("./index.html")).toString()

// All that good ol' regex/string matching magic using some home grown regex and strings.
html = html
    // Replace the title and favicon with nothing, could probably be changed later to appear like google classroom
    .replace(/<title>[\s\S]*?<\/title>/, "<title>.</title>")
    .replace(/<link rel="shortcut icon" type="image\/png" href=".*?">/, "")

    .replace(/<h.>.*?<\/h.>/g, "") // Remove headers
    .replace(/<img.*?>/g, "") // Remove img elements
    .replace(/<p>[\s\S]*?<\/p>/g, "") // Remove paragraph elements
    .replace(/<label[\s\S]*?>[\s\S]*?<\/label>/g, "") // Remove label elements
    .replace(">Hang Extension!</button>", ">Start!</button>") // Changes wording of kill extension button to be less obvious to someone just glancing at a user's screen.
    .replace(">Kill Extension!</button>", ">Finish!</button>") // Changes wording of kill extension button to be less obvious to someone just glancing at a user's screen.
    .replace("<footer>", "<footer><a href='https://github.com/Blobby-Boi/'>Link to Creator</a>") // Add back link to Blobby Boi's Github

    // Only leave capital letters inside the extension names
    .replace(/(?<=").*?(?=": "chrome-extension:\/\/)/gi, (matchedText)=>{
        return matchedText.replace(/[a-z]/g, "")
    })

    // Make some element text contents give away what the page does less.
    .replace(/ extension.? (?!\=)/gi, " ") 
    .replace(/kill/gi, "stop")
    .replace(/hanged/gi, "paused")
    .replace(/hang/gi, "pause");

// Write the now stripped down HTML to a new file.  
fs.writeFileSync(path.resolve("./stripped.html"), html)
