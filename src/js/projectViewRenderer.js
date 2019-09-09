const {BrowserWindow, dialog} = require('electron').remote
//const {ipcRenderer} = require('electron');
const path = require('path')
const project = require('../lib/Project.js')

const goalList = document.getElementById('goal-list')
const addGoalListItem = document.getElementById('add-goal-li')
const goalInfoDiv = document.getElementById("goal-info-view")

let count = 0

addGoalListItem.addEventListener('click', () => {
  console.log("Adding a new goal ...")
  count = count + 1
  newGoal = createGoal(count)
  //goalList.insertBefore(newGoalU`, goalList.firstChild)
  goalList.insertBefore(newGoal, addGoalListItem)
})

function createGoal(goalNumber) {
  //Create the Goal as a list element
  newGoal = document.createElement('li')
  newGoalObj = getGoalInfo(goalNumber)
  newGoal.gObj = newGoalObj
  newGoal.innerHTML = newGoalObj.gtitle

  //Prepare goal-info-view content
  htmlContent = createGoalMarkup(newGoalObj)
  newGoal.htmlContent = htmlContent //HTML markup is stored as a part of the li - bad idea?
  //console.log(newGoal.htmlContent)
  //ToDo: displayHtmlContent(htmlContent) //Fill goal-li w/ generated content


  //Mark goal as complete
  newGoal.addEventListener('dblclick', (e) => {
    gClicked = e.target
    if (gClicked.gObj.gcompleted == false) {
      gClicked.gObj.gcompleted = true
      gClicked.classList.toggle("isComplete")
    }
    else {
      gClicked.gObj.gcompleted = false
      gClicked.classList.toggle("isComplete")
    }
    gClicked.htmlContent = createGoalMarkup(gClicked.gObj)
    //Refresh goal-info-view
    goalInfoDiv.innerHTML=''
    goalInfoDiv.appendChild(gClicked.htmlContent)

    //goalInfoDiv.innerHTML='Goal info will appear here.'
  })

  //Load content for goal-info-view attached to this goal.
  newGoal.addEventListener('click', (e) => {
    goalInfoDiv.innerHTML=''
    goalInfoDiv.appendChild(e.target.htmlContent)
  })


  return newGoal

  function getGoalInfo(count) {
    return new project.goal(count, 'thisProject',  'Goal #' + count, 'Here\'s some info')
  }
//TODO: Modify based on Goal content
/* Returns auto-generated HTML corresponding to the Goal object */
function createGoalMarkup(GoalObj) {
  /*Div*/
  gProjectDiv = document.createElement('div')
  gTitleDiv = document.createElement('div')
  gInfoDiv = document.createElement('div')
  gCompletedDiv = document.createElement('div')

  /*Text*/
  gProjectText = document.createTextNode("Project: " + GoalObj.gparent)
  gTitleText = document.createTextNode("Title: " + GoalObj.gtitle)
  gInfoText = document.createTextNode("Info: " + GoalObj.ginfo)
  gCompletedText = document.createTextNode("Completed: " + GoalObj.gcompleted)

  /*Text to div*/
  gProjectDiv.appendChild(gProjectText)
  gTitleDiv.appendChild(gTitleText)
  gInfoDiv.appendChild(gInfoText)
  gCompletedDiv.appendChild(gCompletedText)

  /*Div to gNode*/
  gNode = document.createElement('div')
  gNode.appendChild(gTitleDiv)
  gNode.appendChild(gProjectDiv)
  //gNode.appendChild(gInfoText)
  gNode.appendChild(gInfoDiv)
  gNode.appendChild(gCompletedDiv)

  return gNode
  }
}
