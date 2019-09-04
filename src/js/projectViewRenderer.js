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

document.addEventListener('click', (e) => {
  if (e.target && e.target.id == 'goal-li') {
      count = count - 1
      e.target.remove()
  }
})

function createGoal(goalNumber) {
  newGoal = document.createElement('li')
  newGoal.innerHTML = 'Goal #' + goalNumber
  newGoal.id = 'goal-li'
  console.log(newGoal)
  return newGoal
}

//What I want to do

/*
  1. Create a new window
  2. Do stuff with the new window
*/
