import { Deck } from './Deck'
import { ActiveDeck } from './ActiveDeck';

export class DeckService {        

    public async getCurrentDeckFromActiveGame(source: { getCurrentDeck: () => Promise<ActiveDeck> } ): Promise<ActiveDeck> {
        return await source.getCurrentDeck();
    }

    public async getCurrentDeckFromMenu(source: { getCurrentDeck: () => Promise<Deck> } ): Promise<Deck> {
        return await source.getCurrentDeck();
    }
    
}