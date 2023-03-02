// const { getCurrentWindow } = require('@electron/remote/main');
const {BrowserWindow, app, dialog} = require('electron');
const ipc = require('electron').ipcMain;
//const fileService = require('../src/services/FileService').getInstance();

require('@electron/remote/main').initialize();

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            enableRemoteModule: true,
            nodeIntegration: true,
            contextIsolation: false
        }
    })

    win.loadURL('http://localhost:3000');

}

ipc.on('chooseFile', (event, data) => {
    if(!!data)
    {
        dialog.showOpenDialog({properties: ['openFile']}).then((result) => {
            if(result.canceled === false && result.filePaths.length === 1)
            {
                
                //console.log(JSON.stringify(fileService.readFileText(result.filePaths[0])))
                event.reply('fileText', {path: result.filePaths[0]});
            }
        });
    }
    
})

// ipc.on('closeFile', ())



app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') {
        app.quit();
    }
})


app.on('activate', () => {
    if(BrowserWindow.getAllWindows().length === 0) createWindow()
})