const electron = require('electron');
const {ipcMain} = require('electron');
var menubar = require('menubar');

const app = electron.app;
var mb = menubar();

mb.on('ready', function ready () {
    console.log('app is ready');
});

ipcMain.on('quit', () => {
    app.quit();
});


// const BrowserWindow = electron.BrowserWindow;

// let mainWindow;

// function createWindow () {
//     mainWindow = new BrowserWindow({width: 800, height: 600});

//     mainWindow.loadURL(`file://${__dirname}/index.html`);
//     mainWindow.webContents.openDevTools();

//     mainWindow.on('closed', function () {
//         mainWindow = null;
//     });
// }

// app.on('ready', createWindow);

// app.on('window-all-closed', function () {
//     //if (process.platform !== 'darwin') {
//     app.quit();
//     //}
// });

// app.on('activate', function () {
//     if (mainWindow === null) {
//         createWindow();
//     }
// });



