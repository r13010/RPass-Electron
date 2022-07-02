const { fail } = require('assert');
const { app, BrowserWindow, Menu, MenuItem, Tray } = require('electron');
const path = require('path');
const { exit } = require('process');
const { Interface } = require('readline');
const { remote } = require("electron");

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  // eslint-disable-line global-require
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences:{
      nodeIntegration: true,
      devTools: true,
    },
    icon: 'src/graphics/rpassicon.ico',
    autoHideMenuBar: true,
  });

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, 'index.html'));
  // Open the DevTools.
  //mainWindow.webContents.openDevTools();
  //tray = new Tray('src/graphics/rpassicon.ico')
};
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
const menu = new Menu()
menu.append(new MenuItem({
  label: 'RPass',
  submenu: [
    {
      role: 'help',
      accelerator: process.platform === 'darwin' ? 'Ctrl+Cmd+I' : 'Ctrl+Shift+I',
      click: () => { BrowserWindow.getFocusedWindow().toggleDevTools(); },
    },
    {
      role: 'help',
      accelerator: process.platform === 'darwin' ? 'Ctrl+R' : 'Ctrl+R',
      click: () => { BrowserWindow.getFocusedWindow().reload(); },
    },
    {
      role: 'help',
      accelerator: process.platform === 'darwin' ? 'Ctrl+-' : 'Ctrl+-',
      click: () => { BrowserWindow.getFocusedWindow().setContentSize(100, 200); },
    },
  ]
}));
Menu.setApplicationMenu(menu);


//BrowserWindow.getFocusedWindow().minimize(); // minimize