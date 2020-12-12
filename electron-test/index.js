const { app, BrowserWindow } = require("electron");
const path = require('path');
const iconPath = path.join(__dirname, "build", "icon.png");

let window = new BrowserWindow({
      icon: iconPath
})

app.whenReady().then(createWindow);

function createWindow() {
  const win = new BrowserWindow({
    width: 190,
    height: 150,
    resizable: true,
  });
  win.loadFile("index.html");
}
