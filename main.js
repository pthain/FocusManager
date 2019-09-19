const electron = require('electron')
const {app, dialog, BrowserWindow, ipcMain} = require('electron')

let primaryWin

/**************************************************************************
  Create Primary Window.
  Contains the following views:
  NoProject.html    //If no project has been selected, show this page
  ProjectView.html  //Shows the contents of a current project
****************************************************************************/
function createPrimaryWindow () {
  primaryWin = new BrowserWindow({
    width: 1200,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  primaryWin.loadURL(`file://${__dirname}/src/html/defaultProjectView.html`)

  primaryWin.on('closed', function () {
    app.quit()
  })

  primaryWin.webContents.openDevTools()
}

/**************************************************************************
  Create Input Window.
  Contains the following views:
  newProjectForm.html    //If no project has been selected, show this page
  newGoalForm.html  //Shows the contents of a current project
****************************************************************************/
function createInputWindow(htmlPath) {
  console.log("new input window")
  let inputWin = new BrowserWindow({
    width: 600,
    height: 200,
    webPreferences: {
      nodeIntegration: true
    }
  })
  inputWin.loadURL(htmlPath)
  inputWin.show()
}

app.on('ready', createPrimaryWindow)

/** Create a form to obtain project data **/
ipcMain.on('open-new-project-form', (e) => {
  htmlPath = `file://${__dirname}/src/html/newProjectForm.html`
  createInputWindow(htmlPath)
})


/** Updates the primaryWin to display the selected project **/
ipcMain.on('update-project-view', (e, projName) => {
  primaryWin.loadURL(`file://${__dirname}/src/html/projectView.html`)
  if ((projName == null) || (projName == "")) {
    projName = "Untitled"
  }
  primaryWin.setTitle(projName)

  primaryWin.on('page-title-updated', (e) => {
      e.preventDefault()
  })
})

/****************
  Goal creation
*****************/
let projSender  //The original sender who requested goal info (projectViewRenderer.js)

/**
  FROM: projectView.js
  Create a form to obtain goal data
**/
ipcMain.on('open-new-goal-form', (e) => {
  htmlPath = `file://${__dirname}/src/html/newGoalForm.html`
  createInputWindow(htmlPath)
  projSender = e.sender
})

/**Sends goal data to the project view**/
ipcMain.on('goal-submit', (e, goalObj) => {
  projSender.send('send-goal-object', goalObj)
})
