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

document.addEventListener('dblclick', (e) => {
  if (e.target && e.target.id == 'goal-li') {
      //Remove goal from list
      e.target.remove()
      //Reset goal-info-view
      document.getElementById("goal-info-view").innerHTML='Goal info will appear here.'
  }
})

document.addEventListener('click', (e) => {
  if (e.target && e.target.id == 'goal-li') {
      //Show goal's html in goal-info-view
      document.getElementById("goal-info-view").innerHTML='<object type="text/html" data="../html/practice.html" ></object>'
  }
})

function createGoal(goalNumber) {
  newGoal = document.createElement('li')
  newGoal.innerHTML = 'Goal #' + goalNumber
  newGoal.id = 'goal-li'
  console.log(newGoal)
  return newGoal
}
