const {BrowserWindow, app} = require('electron').remote
const {ipcRenderer} = require('electron')
const path = require('path')

projSubmitBtn = document.getElementById('POST-proj-submitBtn')
projSubmitBtn.addEventListener('click', () => {
  console.log("Opening a new project...")
  ipcRenderer.send('open-project-view')
  window.close()
})

const wholeDocument = document.documentElement

wholeDocument.addEventListener('click', () => {
  console.log("Creating a new project ...")
  const htmlPath = path.join('file://', __dirname,'../html/newProjectForm.html')
  let win = new BrowserWindow({width: 600, height: 200})

  win.on('close', () => {win = null})
  win.loadURL(htmlPath)
  win.show()
})
