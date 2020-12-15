//Review of code completed and all ready togo
//This is the index.html file of Electron clock app
const { app, BrowserWindow } = require("electron");

app.whenReady().then(createWindow);

function createWindow() {
  const win = new BrowserWindow({
    width: 190,
    height: 150,
    resizable: true,
    icon:'D:\ELECTRON\electron-minds\electron-test\img-src\clock.png'
  });
  win.loadFile("index.html");}
