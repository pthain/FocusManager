console.log("Script begin")

const {BrowserWindow, dialog} = require('electron').remote
const path = require('path')

const wholeDocument = document.documentElement

wholeDocument.addEventListener('click', () => {
  console.log("Creating a new project ...")
  const htmlPath = path.join('file://', __dirname,'newProjectForm.html')
  let win = new BrowserWindow({width: 600, height: 200})

  win.on('close', () => {win = null})
  win.loadURL(htmlPath)
  win.show()
})


//What I want to do

/*
  1. Create a new window
  2. Do stuff with the new window
*/
