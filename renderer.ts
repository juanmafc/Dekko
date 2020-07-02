import { ipcRenderer } from 'electron'

const ipc = ipcRenderer;

document.getElementById('getDeckButton')!.addEventListener('click', () => {
    console.log("Voy a llamar al deck");
})