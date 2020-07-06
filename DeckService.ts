import { LoRCardRepository } from './LoRCardRepository'
import { PositionalRectangles,Rectangle } from './PositionalRectangles';
import { LoRAPI } from './LoRAPI'
import { Deck, Card } from './Deck'
import { ActiveDeck } from './ActiveDeck';

export class DeckService {

    private lorCardsRepository: LoRCardRepository = new LoRCardRepository(String.raw`C:\Users\juanm\Documents\LoRDeckVersionController\LoRCards.json`);    

    public async getActiveDeck(): Promise<ActiveDeck> {
        return await LoRAPI.getActiveDeck();
    } 

    public async getCurrentDeck(): Promise<Deck> {
        
        //TODO: move this to constructor
        const codeToNameMap:Map<string, string> = this.lorCardsRepository.getCodeToNameMap();
    
        const cardsRectangles:Rectangle[] = await this.getDeckCardsRectangles();
        
        let cards: Card[] = cardsRectangles.map( (cardRectangle:Rectangle) => {
            let cardCode = cardRectangle.CardCode;
            let cardName = <string> codeToNameMap.get(cardRectangle.CardCode);
            return new Card(cardCode, cardName);
        });    
    
        return new Deck(cards);
    }    

    private async getDeckCardsRectangles(): Promise<Rectangle[]> {
        const response: PositionalRectangles = await LoRAPI.getPositionalRectangles();
        const cardRectangles: Rectangle[] = response.Rectangles;
        return cardRectangles.filter( rectangle => this.rectangleIsADeckCard(rectangle) );    
    }

    private rectangleIsADeckCard(rectangle:any) {
        const cardInDeckWidth = 410;
        const cardInDeckHeight = 82;
            
        return rectangle.Width === cardInDeckWidth && rectangle.Height === cardInDeckHeight;
    }
}