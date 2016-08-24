const electron = require('electron');
const {ipcMain} = require('electron');
var menubar = require('menubar');

const app = electron.app;
var mb = menubar();

mb.on('ready', () => {
    console.log('app is ready');
});

ipcMain.on('quit', () => {
    app.quit();
});
