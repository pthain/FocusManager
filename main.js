/***
  Credits to the electron-quick-start project.
***/

const {app, BrowserWindow, Menu, shell} = require('electron')

//Global reference to the window object
let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow ({
    width:  600,
    height: 400,
    webPreferences: {
      nodeIntegration: true
    }
  })

  mainWindow.loadFile('index.html')

  //Open dev tools on startup
  //mainWindow.webContents.openDevTools()

  mainWindow.on('close', () => {
    console.log("Closing all windows...")
    mainWindow = null
  })
}

let template = [{
  role: 'fileMenu',
  submenu: [{
    label: 'Save',
    accelerator: 'CmdOrCtrl+Z',
    click: () => {
      console.log("Time to save a file")
    }
  }]
}, {
  role: 'viewMenu'}]

//app.on('ready', createWindow)
app.on('ready', () => {
  createWindow()
  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)

})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
  if (mainWindow === null) createWindow()
})
