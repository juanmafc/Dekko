import { LoRAPI } from './LoRAPI'




/*
LoRAPI.getActiveDeck().then( activeDeck => {
    console.log( activeDeck);
    if (activeDeck.CardsInDeck){
        if ('02NX010' in activeDeck.CardsInDeck) {
            console.log( activeDeck.CardsInDeck['02NX010'] )
        }
    }
});
*/

LoRAPI.getPositionalRectangles().then( rectangles => console.log(rectangles) );

