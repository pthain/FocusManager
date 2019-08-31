const electron = require('electron')
const {app, dialog, BrowserWindow } = require('electron')

let win

function createWindow () {
  win = new BrowserWindow({
    width: 1200,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadURL(`file://${__dirname}/src/html/index.html`)

  win.on('closed', function () {
    app.quit()
  })

  win.webContents.openDevTools()
}

app.on('ready', createWindow)
