import {Deck, CardInDeck} from './Deck'

/*
https://blog.simontest.net/extend-array-with-typescript-965cc1134b3
https://stackoverflow.com/questions/12802383/extending-array-in-typescript

class CardsInDeck extends Array<CardInDeck>{
    

    public contains(otherCard: CardInDeck): boolean {
        return this.propTranslation.find(t=>t.language==language).text;
    }
    
}
*/



export interface CardChanges{
    removedCardsInDeck:CardInDeck[];
    addedCardsInDeck:CardInDeck[];
}

export function getCardChanges( originalDeck: Deck, modifiedDeck: Deck ): CardChanges {
    return getCardsInDeckChanges(originalDeck.getCards(), modifiedDeck.getCards());
}

export function getCardsInDeckChanges(original: CardInDeck[], modified: CardInDeck[]) {
    let removedCardsInDeck = calculateDeckDifferences(original, modified);
    let addedCardsInDeck = calculateDeckDifferences(modified, original);

    return{        
        removedCardsInDeck:removedCardsInDeck,
        addedCardsInDeck:addedCardsInDeck
    }
}

function calculateDeckDifferences(deck1: CardInDeck[], deck2: CardInDeck[]): CardInDeck[] {
    return deck1.map( (myCard:CardInDeck) => new CardInDeck(myCard.name, myCard.ammount - getAmmountOfCard(deck2, myCard.name) )).filter(cardInDeck => cardInDeck.ammount > 0 );    
}

function getAmmountOfCard(deck:CardInDeck[] , lookUpName: string): number{
    let foundCard: CardInDeck | undefined = deck.find( card => card.name == lookUpName );
    if(foundCard === undefined) {
        return 0;
    }
    return foundCard.ammount;
}



