import axios from 'axios';
import { FileUtils } from './FileUtils';
import { PositionalRectangles,Rectangle } from './PositionalRectangles';
import { Card } from './LoRSet'



function rectangleIsADeckCard(rectangle:any) {
    const cardInDeckWidth = 410;
    const cardInDeckHeight = 82;
        
    return rectangle.Width === cardInDeckWidth && rectangle.Height === cardInDeckHeight;
}

async function getDeckCardsRectangles(): Promise<Rectangle[]> {
    const response: PositionalRectangles = (await axios.get<PositionalRectangles>('http://localhost:21337/positional-rectangles')).data;
    const cardRectangles: Rectangle[] = response.Rectangles;
    return cardRectangles.filter( rectangle => rectangleIsADeckCard(rectangle) );    
}


async function PrintCardsInDeck(): Promise<void> {
    const cards = FileUtils.readFileToJsonSync<Card[]>(String.raw`C:\Users\juanm\Documents\LoRDeckVersionController\LoRCards.json`);    

    //const codeToNameMap = cards.reduce( (map: any, card:any) => map[card.cardCode] = card.name, {});
    const codeToNameMap = cards.reduce<Map<string, string>>( (map: Map<string, string>, card:Card) => map.set(card.cardCode, card.name), new Map());
    //const codeToNameMap = new Map<string, string>( cards.map( (card:Card) => [card.cardCode, card.name] ));

    const cardsRectangles:Rectangle[] = await getDeckCardsRectangles();        
    cardsRectangles.forEach( (card:Rectangle) => console.log(card.CardCode, codeToNameMap.get(card.CardCode)) );
}

PrintCardsInDeck();


//getDeck( deck => console.log(deck.cards) );

