// Modules to control application life and create native browser window

const { app,  protocol, BrowserWindow } = require('electron');
// const {app, BrowserWindow} = require('electron')
const { ipcMain } = require('electron')

const path = require('path')


function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1600,
    height: 900,
    webPreferences: {
      webviewTag: true,
      webSecurity: false,
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      contextIsolation: false,
    }
    // icon: "icons/elec-app-log.png.png"
  })

  // and load the index.html of the app.
  //mainWindow.loadFile('index.html')
  mainWindow.loadFile('src/login.html')
  // mainWindow.setMenu(Electron.Menu({"ada":"Hello"}))
  mainWindow.setMenu(null)
  mainWindow.maximize()

  mainWindow.webContents.session.webRequest.onHeadersReceived(
    {urls: ['*://*/*']},
    (details, callback) => {
      Object.keys(details.responseHeaders).filter(x => x.toLowerCase() === 'x-frame-options')
            .map(x => delete details.responseHeaders[x])
  
      callback({
        cancel: false,
        responseHeaders: details.responseHeaders,
      })
    },
  )

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {

  protocol.registerFileProtocol('app', (request, callback) => {
    const url = request.url.substr(6);
    callback({
        path: path.normalize(`${__dirname}/${url}`)
    });
  }, (error) => {
      if (error) console.error('Failed to register protocol');
  });

  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

app.commandLine.appendSwitch('ignore-certificate-errors', 'true')
// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

// ----------------backend service---------------//

// ----------------- very bottom ----------------//
const IDSend = "ipcMain [send msg]:"
const IDRecv = "ipcMain [recv msg]:"

ipcMain.on('asynchronous-message', (event, arg) => {
  console.log(IDRecv + "async msg " + arg)

  msg = "Am main progress , async msg"
  console.log(IDSend + msg)
  event.reply('asynchronous-reply', msg)
})

ipcMain.on('synchronous-message', (event, arg) => {
  console.log(IDRecv + "sync msg " + arg)
  event.returnValue = 'rely: sync msg'
})
