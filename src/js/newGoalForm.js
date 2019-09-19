const {BrowserWindow, app} = require('electron').remote
const {ipcRenderer} = require('electron')
const path = require('path')
const project = require('../lib/Project.js')


goalForm = document.getElementById('POST-goal-form')
goalName = document.getElementById('POST-goal-name')

/** TODO: Create a goal object, Send to primaryWin, update primaryWin view **/
goalForm.addEventListener('submit', () => {
    formData = [goalName.value]
    goalObj = buildGoalObject(formData)
    //ipcRenderer.send('goal-submit', goalName.value)
    ipcRenderer.send('goal-submit', goalObj)
    window.close()
})

let id = 0
function buildGoalObject(formData) {
  id++
  return new project.goal(id, 'thisProject',  formData[0], 'Here\'s some info')
}
