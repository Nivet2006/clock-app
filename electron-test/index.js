const { app, BrowserWindow } = require("electron");

app.whenReady().then(createWindow);

function createWindow() {
  const win = new BrowserWindow({
    width: 190,
    height: 150,
    resizable: true,
  });
  win.loadFile("index.html");
  win.setIcon('D:\ELECTRON\electron-minds\electron-test\img-src\clock.ico');
}
