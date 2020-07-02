import { app, BrowserWindow } from 'electron'

app.on('ready', _=> {
    
    const mainWindow = new BrowserWindow({
        height: 400,
        width: 400
    });    

    const anotherWindow = new BrowserWindow({
        height: 400,
        width: 400
    });
    
})