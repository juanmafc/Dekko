import { ipcRenderer } from 'electron'
import { Application } from './Application'

const ipc = ipcRenderer;
const app = new Application();

document.getElementById('setOriginalDeckButton')!.addEventListener('click', () => {
    app.setCurrentDeckAsOriginalDeck();
})

document.getElementById('setModifiedDeckButton')!.addEventListener('click', () => {
    app.setCurrentDeckAsModifiedDeck();
})

document.getElementById('getCardChangesButton')!.addEventListener('click', () => {
    console.log(app.getCardChanges());
})