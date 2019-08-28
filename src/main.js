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

  win.on('closed', function () {
    win = null
  })

  win.webContents.openDevTools()
}

app.on('ready', createWindow)
