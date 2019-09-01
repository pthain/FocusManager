console.log("Script begin")

const {BrowserWindow, dialog} = require('electron').remote
const {ipcRenderer} = require('electron');
const path = require('path')

const wholeDocument = document.documentElement

wholeDocument.addEventListener('click', () => {
  console.log("Creating a new project ...")
  ipcRenderer.send('open-new-project-form')
})


//What I want to do

/*
  1. Create a new window
  2. Do stuff with the new window
*/
