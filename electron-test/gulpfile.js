var gulp = require('gulp');

var winInstaller = require('electron-windows-installer');
 
gulp.task('create-windows-installer', function (done) {
    winInstaller({
        appDirectory: './node_modules/electron/dist',
        outputDirectory: './release',
        arch: 'ia32',
        authors: "minds0987 web productions",
        version: "1.0.0",
        iconUrl: "D:\ELECTRON\electron-minds\electron-test\img-src\clock.ico",
        setupIcon: "D:\ELECTRON\electron-minds\electron-test\img-src\clock.ico",
        loadingGif: "D:\ELECTRON\electron-minds\electron-test\img-src\loading.gif",
        noMsi:true,
        setupExe: "clock",
        setupMsi: "clock"
    }).then().catch();
});