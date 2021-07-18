// MODULES
const {app, BrowserWindow, ipcMain} = require('electron');
const path = require('path');
ipc = ipcMain;
// IMPORTS
// SRC 
app.whenReady()
.then(() => createWindow())
.catch(err => console.error(err))
function createWindow() {
    let win = new BrowserWindow({
        autoHideMenuBar: true,
        show: false,
        minWidth: 480,
        minHeight: 240,
        resizable: false,
        frame: false,
        webPreferences: {
            contextIsolation: true,
            preload: path.join(__dirname, 'preload.js')
          }
    });
    win.loadFile(path.join(__dirname, '/public/index.html'))
    win.on('ready-to-show', () => {
        win.show();
    })
    win.on('close', () => {
        const { clearMem } = require('./scripts/garbage');
        clearMem(win);
    });
    win.webContents.openDevTools();
    ipc.handle('closeApp', (event, args) => {
        app.quit();
    })
    ipc.handle('minimizeApp', (event, args) => {
        win.minimize();
    })
}

