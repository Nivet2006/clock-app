const { app, BrowserWindow } = require("electron");

app.whenReady().then(createWindow);

function createWindow() {
  const win = new BrowserWindow({
    width: 190,
    height: 150,
    resizable: true,
  });
  mainWindow = new BrowserWindow({width: 800, height: 600,icon: 'D:\ELECTRON\electron-minds\electron-test\img-src\clock.ico'});
  win.loadFile("index.html");
}