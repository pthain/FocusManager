const {BrowserWindow, dialog} = require('electron').remote

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
