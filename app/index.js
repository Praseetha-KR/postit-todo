// var menubar = require('menubar');

// var mb = menubar();

// mb.on('ready', function ready () {
//   console.log('app is ready');
// });


const electron = require('electron');

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;

function createWindow () {
    mainWindow = new BrowserWindow({width: 800, height: 600});

    mainWindow.loadURL(`file://${__dirname}/index.html`);
    mainWindow.webContents.openDevTools();

    mainWindow.on('closed', function () {
        mainWindow = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
    //if (process.platform !== 'darwin') {
    app.quit();
    //}
});

app.on('activate', function () {
    if (mainWindow === null) {
        createWindow();
    }
});

const {ipcMain} = require('electron');
// ipcMain.on('asynchronous-message', (event, arg) => {
//     console.log(arg);
//     event.sender.send('asynchronous-reply', 'pong');
// });

ipcMain.on('quit', (event, arg) => {
    app.quit();
});
