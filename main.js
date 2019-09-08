const electron = require('electron')
const {app, dialog, BrowserWindow, ipcMain} = require('electron')

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
  win.webContents.on('did-finish-load', function() {
    win.show()
  })
}

app.on('ready', createWindow)

ipcMain.on('open-new-project-form', (e) => {
  const htmlPath = `file://${__dirname}/src/html/newProjectForm.html`
  let tmpWin = new BrowserWindow({
    width: 600,
    height: 200,
    webPreferences: {
      nodeIntegration: true
    }
  })

  tmpWin.on('close', () => {tmpWin = null})
  tmpWin.loadURL(htmlPath)
  tmpWin.show()
  tmpWin.loadURL(`file://${__dirname}/src/html/newProjectForm.html`)
})

ipcMain.on('open-project-view', (e, projName) => {
  win.loadURL(`file://${__dirname}/src/html/projectView.html`)
  console.log(projName)
  if ((projName == null) || (projName == "")) {
    projName = "Untitled"
  }
  win.setTitle(projName)

  win.on('page-title-updated', (e) => {
      e.preventDefault()
  })
})
