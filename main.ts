import { app, BrowserWindow } from 'electron'

app.on('ready', _=> {
    
    let mainWindow = new BrowserWindow({
        height: 400,
        width: 400
    });    
    
    let path = `file://${__dirname}/../get_deck_button.html`;    
    mainWindow.loadURL(path);
    
    mainWindow.on('closed', () => {
        console.log('main window was closed');            
    })

    /*
    const anotherWindow = new BrowserWindow({
        height: 400,
        width: 400
    });
    */
    
})