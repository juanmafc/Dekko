import { Deck } from './Deck'
import { CardChanges, getCardChanges } from './CardChanges'
import { DeckService } from './DeckService'
import { LoRService } from './LoRService'

export class Application {

    private originalDeck: Deck = new Deck([]);
    private modifiedDeck: Deck = new Deck([]);

    private deckService: DeckService = new DeckService();
    private lorService: LoRService = new LoRService();

    public async setCurrentDeckAsOriginalDeck(): Promise<void> {
        this.originalDeck = await this.deckService.getCurrentDeck();
    }

    public async setCurrentDeckAsModifiedDeck(): Promise<void> {
        this.modifiedDeck = await this.deckService.getCurrentDeck();
    }

    public getCardChanges(): CardChanges {
        //TODO: race condition if original or modified deck were not already set
        return getCardChanges(this.originalDeck, this.modifiedDeck);
    }


    public startTrackingActiveDeck(callback: (isGameActive: boolean) => void) {
        this.lorService.registerActiveGameCallback(callback);
        this.lorService.startTrackingActiveGame();
    }
}