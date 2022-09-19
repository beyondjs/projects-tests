import {app, BrowserWindow} from 'electron';

function createWindow() {
    const win = new BrowserWindow({
        webPreferences: {
            devTools: true
        },
        width: 800,
        height: 600,
    });

    win.loadURL('http://localhost:6060').catch(err => console.log(err.stack));
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
})
