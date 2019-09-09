const {BrowserWindow, dialog} = require('electron').remote
//const {ipcRenderer} = require('electron');
const path = require('path')
const project = require('../lib/Project.js')

const goalList = document.getElementById('goal-list')
const addGoalListItem = document.getElementById('add-goal-li')
const goalInfoDiv = document.getElementById("goal-info-view")

let count = 0 //Number of Goals created

/****************
  Add a new goal
*****************/
addGoalListItem.addEventListener('click', () => {
  console.log("Adding a new goal ...")
  count = count + 1
  gListItem = createGoal(count)
  goalList.insertBefore(gListItem, addGoalListItem) //Insert goal li into ul
})


/************************************************
  Gets input from user to create a Goal
  Stores input into a Goal object
  HTML content is created based off the values of the object
  Returns a <li> containing the goal's title
*************************************************/
function createGoal(goalNumber) {
  gListItem = document.createElement('li')
  gObj = getGoalInfo(goalNumber)    //Create a goal object
  gListItem.gObj = gObj             //Attach object to this listItem
  gListItem.innerHTML = gListItem.gObj.gtitle

  //Prepare goal-info-view content
  gListItem.htmlContent = createGoalMarkup(gListItem.gObj)

  /************************************************/
  /*** LISTENER FUNCTIONS ATTACHED TO THIS GOAL ***/
  /************************************************/
  /* Mark goal as complete */
  gListItem.addEventListener('dblclick', (e) => {
    gClicked = e.target
    if (gClicked.gObj.gcompleted == false) {
      gClicked.gObj.gcompleted = true
      gClicked.classList.toggle("isComplete")
    }
    else {
      gClicked.gObj.gcompleted = false
      gClicked.classList.toggle("isComplete")
    }
    //Update HTML and refresh the goal-view
    gClicked.htmlContent = createGoalMarkup(gClicked.gObj)
    //goalInfoDiv.innerHTML=''
    //goalInfoDiv.appendChild(gClicked.htmlContent)
    updateGoalView(gClicked.htmlContent)

    //goalInfoDiv.innerHTML='Goal info will appear here.'
  })

  /* Load content for goal-info-view attached to this goal. */
  gListItem.addEventListener('click', (e) => {
    updateGoalView(e.target.htmlContent)
  })

  return gListItem

}

/******************************
  Wrapper for Goal Constructor
*******************************/
function getGoalInfo(count) {
  return new project.goal(count, 'thisProject',  'Goal #' + count, 'Here\'s some info')
}

/*****************************************************************
  Returns auto-generated HTML corresponding to the Goal object
******************************************************************/
function createGoalMarkup(goalObj) {
/*Div*/
gProjectDiv = document.createElement('div')
gTitleDiv = document.createElement('div')
gInfoDiv = document.createElement('div')
gCompletedDiv = document.createElement('div')

/*Text*/
gProjectText = document.createTextNode("Project: " + goalObj.gparent)
gTitleText = document.createTextNode("Title: " + goalObj.gtitle)
gInfoText = document.createTextNode("Info: " + goalObj.ginfo)
gCompletedText = document.createTextNode("Completed: " + goalObj.gcompleted)

/*Text to div*/
gProjectDiv.appendChild(gProjectText)
gTitleDiv.appendChild(gTitleText)
gInfoDiv.appendChild(gInfoText)
gCompletedDiv.appendChild(gCompletedText)

/*Div to gNode*/
gNode = document.createElement('div')
gNode.appendChild(gTitleDiv)
gNode.appendChild(gProjectDiv)
gNode.appendChild(gInfoDiv)
gNode.appendChild(gCompletedDiv)

return gNode
}

/****************************************************************
  Reset's the goal-view to display new content
*****************************************************************/
function updateGoalView(htmlContent) {
    goalInfoDiv.innerHTML=''
    goalInfoDiv.appendChild(htmlContent)
}
