const {BrowserWindow, app} = require('electron').remote
const {ipcRenderer} = require('electron')
const path = require('path')

goalForm = document.getElementById('POST-goal-form')
goalName = document.getElementById('POST-goal-name')

/** TODO: Create a goal object, Send to primaryWin, update primaryWin view **/
goalForm.addEventListener('submit', () => {
    ipcRenderer.send('goal-submit', goalName.value)
})
