const electron = require('electron')
const {app, dialog, ipcMain, BrowserWindow } = require('electron')

let win

function createWindow () {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadFile('index.html')

  win.webContents.openDevTools()
}

app.on('ready', createWindow)

/*
//Action when form is clicked
function newProject_ClickHandler() {
  console.log("ipc message received")
  dialog.showMessageBox(win, {
    type: "info",
    buttons: ["Okay"],
    title: "New Project",
    message: "Create a new project."
  })
}

ipcMain.on('alert-message', newProject_ClickHandler)
*/
