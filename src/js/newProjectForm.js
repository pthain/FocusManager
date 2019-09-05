const {BrowserWindow, app} = require('electron').remote
const {ipcRenderer} = require('electron')
const path = require('path')

projSubmitBtn = document.getElementById('POST-proj-submitBtn')
projName = document.getElementById('POST-proj-name')
console.log(projName.value)
projSubmitBtn.addEventListener('click', () => {
  console.log("Opening a new project...")

  if (projName.value == null) {
    ipcRenderer.send('open-project-view', "Untitled")
  }
  else {
    ipcRenderer.send('open-project-view', projName.value)
    window.close()
  }
})
