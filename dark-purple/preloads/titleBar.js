const { contextBridge, ipcRenderer } = require('electron')
contextBridge.exposeInMainWorld('titleBar', {
    minimizeApp: () => ipcRenderer.invoke('minimizeApp'),
    closeApp: () => ipcRenderer.invoke('closeApp')
})