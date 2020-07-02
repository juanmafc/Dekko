import { FileUtils } from './FileUtils';
import { PositionalRectangles,Rectangle } from './PositionalRectangles';
import { Card as LoRSetCard} from './LoRSet'
import { Deck, Card } from './Deck'
import { LoRAPI } from './LoRAPI'
import {CardChanges, getCardChanges} from './CardChanges'

export class Application {

    private originalDeck: Deck = new Deck([]);
    private modifiedDeck: Deck = new Deck([]);

    public async setCurrentDeckAsOriginalDeck(): Promise<void> {
        this.originalDeck = await this.getCurrentDeck();
    }

    public async setCurrentDeckAsModifiedDeck(): Promise<void> {
        this.modifiedDeck = await this.getCurrentDeck();
    }

    public getCardChanges(): CardChanges {
        //TODO: race condition if original or modified deck were not already set
        return getCardChanges(this.originalDeck, this.modifiedDeck);
    }
    

    private async getCurrentDeck(): Promise<Deck> {
        const codeToNameMap:Map<string, string> = this.loadCodeToNameCardMap();
    
        const cardsRectangles:Rectangle[] = await this.getDeckCardsRectangles();            
        
        let cards: Card[] = cardsRectangles.map( (cardRectangle:Rectangle) => {
            let cardCode = cardRectangle.CardCode;
            let cardName = <string> codeToNameMap.get(cardRectangle.CardCode);
            return new Card(cardCode, cardName);
        });    
    
        return new Deck(cards);
    }

    private loadCodeToNameCardMap(): Map<string, string>{
        const setCards = FileUtils.readFileToJsonSync<LoRSetCard[]>(String.raw`C:\Users\juanm\Documents\LoRDeckVersionController\LoRCards.json`);    
        //const codeToNameMap = setCards.reduce( (map: any, card:any) => map[card.cardCode] = card.name, {});    
        const codeToNameMap = setCards.reduce<Map<string, string>>(
            (map: Map<string, string>, card:LoRSetCard) => map.set(card.cardCode, card.name), new Map()
        );
        //const codeToNameMap = new Map<string, string>( setCards.map( (card:Card) => [card.cardCode, card.name] ));    
        return codeToNameMap;
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