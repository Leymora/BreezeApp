const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow (){
    const win = new BrowserWindow({
        width: 800,
        height: 600,

        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    const popup = new BrowserWindow({
        width: 100,
        height: 200,
        
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        },
        parent: win,
        frame: false

    })

    win.loadFile('index.html')
    popup.loadFile('popup.html')
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if(BrowserWindow.getAllWindows().length === 0){
            createWindow()
        }
    })
})

app.on('window-all-closed', () => {
    if(process.platform  !== 'darwin'){
        app.quit()
    }
})