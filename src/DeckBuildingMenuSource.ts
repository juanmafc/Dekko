import { Deck, CardInDeck } from './Deck';
import { LoRCardRepository } from './LoRCardRepository';
import { PositionalRectangles, Rectangle } from './PositionalRectangles';
import { LoRAPI } from './LoRAPI'

export class DeckBuildingMenuSource {
    
    private lorCardsRepository = new LoRCardRepository(String.raw`C:\Users\juanm\Documents\LoRDeckVersionController\LoRCards.json`);
    
    public async getCurrentDeck(): Promise<Deck> {
        
        //TODO: move this to constructor
        const codeToNameMap:Map<string, string> = this.lorCardsRepository.getCodeToNameMap();
    
        const cardsRectangles:Rectangle[] = await this.getDeckCardsRectangles();
        
        let cards: CardInDeck[] = cardsRectangles.map( (cardRectangle:Rectangle) => {
            let cardCode = cardRectangle.CardCode;
            let cardName = <string> codeToNameMap.get(cardRectangle.CardCode);
                        
            return new CardInDeck(cardName, 1)
        });    
    
        let deck = new Deck();
        cards.forEach(card => deck.addCard(card));
        return deck;
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