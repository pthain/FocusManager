console.log("Script begin")

const {BrowserWindow, ipcRenderer} = require('electron')
document.documentElement.addEventListener('click', () => {
  console.log("Click event begin")
  console.log(ipcRenderer)
  ipcRenderer.send('alert-message')
  //document.body.innerText = "Hey! "
  //newText = document.createTextNode("Please don't touch anything")
  //document.body.append(newText)
  //document.body.append(document.createElement("br"))
})
