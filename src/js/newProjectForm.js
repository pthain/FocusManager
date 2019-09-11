const {BrowserWindow, app} = require('electron').remote
const {ipcRenderer} = require('electron')
const path = require('path')

projForm = document.getElementById('POST-proj-form')
projName = document.getElementById('POST-proj-name')
console.log(projName.value)

/** TODO: Create a project object, Send to primaryWin, update primaryWin view **/
projForm.addEventListener('submit', () => {
  if (projName.value == null) {
    ipcRenderer.send('update-project-view', "Untitled")
  }
  else {
    ipcRenderer.send('update-project-view', projName.value)
    window.close()
  }
})
