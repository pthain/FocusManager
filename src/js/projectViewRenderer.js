const {BrowserWindow, dialog} = require('electron').remote
//const {ipcRenderer} = require('electron');
const path = require('path')

const goalList = document.getElementById('goal-list')
const addGoalListItem = document.getElementById('add-goal-li')

let count = 0

addGoalListItem.addEventListener('click', () => {
  console.log("Adding a new goal ...")
  count = count + 1
  newGoal = createGoal(count)
  //goalList.insertBefore(newGoalU`, goalList.firstChild)
  goalList.insertBefore(newGoal, addGoalListItem)
})

function createGoal(goalNumber) {
  newGoal = document.createElement('li')
  newGoalObj = 'Goal #' + goalNumber
  console.log(newGoal)
  //ToDo: newGoalObj = new getGoalInfo() {/*get goal info from user and ret obj*/}
  htmlContent = createGoalMarkup(newGoalObj)
  newGoal.htmlContent = htmlContent
  console.log(newGoal.htmlContent)
  //ToDo: displayHtmlContent(htmlContent) //Fill goal-li w/ generated content
  newGoal.innerHTML = newGoalObj


  //Mark goal as complete
  newGoal.addEventListener('dblclick', (e) => {
    e.target.remove()
    //Reset goal-info-view
    document.getElementById("goal-info-view").innerHTML='Goal info will appear here.'
  })

  //Load content for goal-info-view attached to this goal.
  newGoal.addEventListener('click', (e) => {
    document.getElementById("goal-info-view").innerHTML = e.target.htmlContent
  })

  //TODO: Modify based on Goal content
  /* Returns auto-generated HTML corresponding to the Goal object */
  function createGoalMarkup(newGoalObj) {
    //goalInfoDiv = document.createElement('div')
    goalInfoText = '<h5>This field will display information about '+ newGoalObj + '</h5>'
    //goalInfoDiv.appendChild(goalInfoText)
    return goalInfoText
    }

  return newGoal
}
