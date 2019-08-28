console.log("Script begin")

const {BrowserWindow, dialog} = require('electron').remote

document.documentElement.addEventListener('click', () => {
  dialog.showMessageBox({
    type: "info",
    buttons: ["Okay"],
    title: "New Project",
    message: "Create a new project."
  })
})
