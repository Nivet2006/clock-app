const { app, BrowserWindow } = require("electron");

app.whenReady().then(createWindow);

function createWindow() {
  const win = new BrowserWindow({
    width: 190,
    height: 150,
    resizable: true,
  });
  win.loadFile("index.html");}
