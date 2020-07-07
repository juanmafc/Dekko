import {Deck, Card} from './Deck'

export interface CardChanges{
    removedCards:Card[];
    addedCards:Card[];
}

export function getCardChanges( originalDeck: Deck, modifiedDeck: Deck ): CardChanges {

    let removedCards = getCardsDifference(originalDeck, modifiedDeck);
    let addedCards = getCardsDifference(modifiedDeck, originalDeck);
    
    return {
        removedCards: removedCards, 
        addedCards: addedCards
    };
}

function getCardsDifference( deckA: Deck, deckB: Deck ):Card[] {
    return deckA.cards.filter( (card:Card) => !deckB.contains(card));
}