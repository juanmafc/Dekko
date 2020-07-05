import { ipcRenderer } from 'electron'
import { Application } from './Application'
import { CardChanges } from './CardChanges'
import { Card } from './Deck'

const ipc = ipcRenderer;
const app = new Application();


initializeDeckActionButtons();

function initializeDeckActionButtons() {
    document.getElementById('startTrackingActiveGameButton')!.addEventListener('click', () => {
        app.startTrackingActiveDeck((algo: boolean) => {
            if (algo){
                document.getElementById('deckIsActiveText')!.innerHTML = 'Deck is active?: TRUE';
            }
            else {
                document.getElementById('deckIsActiveText')!.innerHTML = 'Deck is active?: FALSE';
            }
        });
    })

    document.getElementById('setOriginalDeckButton')!.addEventListener('click', () => {
        app.setCurrentDeckAsOriginalDeck();
    })
    
    document.getElementById('setModifiedDeckButton')!.addEventListener('click', () => {
        app.setCurrentDeckAsModifiedDeck();
    })
    
    document.getElementById('getCardChangesButton')!.addEventListener('click', () => {
        renderCardChanges(app.getCardChanges());
    })
}

function renderCardChanges(changes: CardChanges) {    
    renderCardsColumn('RemovedCardsColumn', changes.removedCards);    
    renderCardsColumn('AddedCardsColumn', changes.addedCards);            
}

function renderCardsColumn(columnId: string, cards: Card[]) {
    let column = document.getElementById(columnId);
    for(let card of cards) {
        let cardElement = document.createElement("p") as HTMLParagraphElement;
        cardElement.innerHTML = card.name;
        column?.appendChild(cardElement);
    }
}