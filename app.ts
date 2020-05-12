import axios from 'axios';
import { FileUtils } from './FileUtils';
import { PositionalRectangles,Rectangle } from './PositionalRectangles';
import { Card as LoRSetCard} from './LoRSet'
import { Deck, Card } from './Deck'
import {CardChanges, getCardChanges} from './CardChanges'



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



function loadCodeToNameCardMap(): Map<string, string>{
    const setCards = FileUtils.readFileToJsonSync<LoRSetCard[]>(String.raw`C:\Users\juanm\Documents\LoRDeckVersionController\LoRCards.json`);    
    //const codeToNameMap = setCards.reduce( (map: any, card:any) => map[card.cardCode] = card.name, {});    
    const codeToNameMap = setCards.reduce<Map<string, string>>(
        (map: Map<string, string>, card:LoRSetCard) => map.set(card.cardCode, card.name), new Map()
    );
    //const codeToNameMap = new Map<string, string>( setCards.map( (card:Card) => [card.cardCode, card.name] ));    
    return codeToNameMap;
}

async function getCurrentDeck(): Promise<Deck> {    
    const codeToNameMap:Map<string, string> = loadCodeToNameCardMap();

    const cardsRectangles:Rectangle[] = await getDeckCardsRectangles();            
    
    let cards: Card[] = cardsRectangles.map( (cardRectangle:Rectangle) => {
        let cardCode = cardRectangle.CardCode;
        let cardName = <string> codeToNameMap.get(cardRectangle.CardCode);
        return new Card(cardCode, cardName);
    });    

    return new Deck(cards);
}


async function executeUserOption(dataInput: Object) {
    let option: string = dataInput.toString().trim();    
    if (option == "1"){        
        originalDeck = await getCurrentDeck();
    }
    else if (option == "2"){        
        modifiedDeck = await getCurrentDeck();        
    }
    else if (option == "3"){
        console.log( getCardChanges(originalDeck, modifiedDeck) );        
    }
}

let stdin = process.openStdin();
let originalDeck: Deck;
let modifiedDeck: Deck;

stdin.addListener("data",  executeUserOption );



//getDeck( deck => console.log(deck.cards) );

