const {app, BrowserWindow, dialog, Menu, shell} = require('electron').remote
const fs = require('fs')

console.log("This is the renderer process.")

const echoTextarea = document.getElementById('input-textarea')
const echoBtn = document.getElementById('echo-btn')

echoBtn.addEventListener('click', (event) => {
  console.log('Echoing text ...')
  const options = {
    type: 'info',
    title: 'Echo',
    message: echoTextarea.value,
    buttons: ['Acknowledge']
  }
  console.log(echoTextarea.value)
  dialog.showMessageBox(options)
})

let template = [{
  role: 'fileMenu',
  submenu: [{
    label: 'Save',
    accelerator: 'CmdOrCtrl+s',
    click: () => {
      console.log("Time to save a file")
      saveTextToFile()
    }
  }, {
    label: 'Open',
    accelerator: 'CmdOrCtrl+o',
    click: () => {
      console.log("Time to open a file")
      openTextFile()
    }
  }]
}, {
  role: 'viewMenu'
}]

function openTextFile() {
  var paths = dialog.showOpenDialog((paths) => {
    if (paths === undefined) console.log("No file selected")
    console.log(paths[0])
    fs.readFile(paths[0], "utf-8", (err, data) => {
      if (err) throw err;
      echoTextarea.value = data
      console.log('Successful read.')
    })
  })
}

function saveTextToFile() {
  dialog.showSaveDialog(null, (path) => {
    console.log(path)
    fs.writeFile(path, echoTextarea.value, (err) => {
      if (err) throw err;
      console.log('Successful save.')
    })
  })

}
//app.on('ready', createWindow)
const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)
