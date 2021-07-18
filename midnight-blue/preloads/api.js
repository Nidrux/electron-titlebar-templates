const { contextBridge } = require('electron')
contextBridge.exposeInMainWorld('api', {
    default: 'default'
})