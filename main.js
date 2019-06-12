/***
  Credits to the electron-quick-start project.
***/

const {app, BrowserWindow, dialog, Menu, shell} = require('electron')

//Global reference to the window object
let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow ({
    width:  1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true
    }
  })

  mainWindow.loadFile('index.html')

  //Open dev tools on startup
  mainWindow.webContents.openDevTools()

  mainWindow.on('close', () => {
    console.log("Closing all windows...")
    mainWindow = null
  })
}
/*
let template = [{
  role: 'fileMenu',
  submenu: [{
    label: 'Save',
    accelerator: 'CmdOrCtrl+s',
    click: () => {
      console.log("Time to save a file")
      saveTextToFile()
    }
  }]
}, {
  role: 'viewMenu'}]

function saveTextToFile() {
  dialog.showSaveDialog(null, (path) => {
    console.log(path)
//    fs.writeFile(path, )
  })


}*/
//app.on('ready', createWindow)
app.on('ready', () => {
  createWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
  if (mainWindow === null) createWindow()
})
