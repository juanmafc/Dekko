import {CardInDeck, Deck} from '../src/Deck'

import {CardChanges, getCardChanges, getCardsInDeckChanges} from '../src/CardChanges'

function card(id: number, ammount: number): CardInDeck {
    return new CardInDeck('card'+id, ammount);
}


test.each`
    original | modified | expectedRemovedCards
    ${ [] } | ${ [] } | ${ [] }

    ${ [card(0, 1)] } | ${ [card(0, 1)] } | ${ [] }
    ${ [card(0, 1)] } | ${ [card(0, 3)] } | ${ [] }
    ${ [card(0, 3)] } | ${ [card(0, 1)] } | ${ [card(0, 2)] }

    ${ [card(0, 1)] } | ${ [card(1, 1)] } | ${ [card(0, 1)] }
    ${ [card(0, 3)] } | ${ [card(1, 1)] } | ${ [card(0, 3)] }

    ${ [card(0, 1), card(1,1), card(2,1)] } | ${ [card(0, 1), card(1,1), card(2,1)] } | ${ [] }
    ${ [card(0, 1), card(1,1), card(2,1)] } | ${ [card(0, 1), card(3,1), card(2,1)] } | ${ [card(1,1)] }
`('Given decks original $original and modified $modified, when getting the cards changes, then the removed cards should be $expectedRemovedCards' , ( { original, modified, expectedRemovedCards} ) => {
    let cardChanges = getCardsInDeckChanges(original, modified);

    expect(cardChanges.removedCards).toEqual(expectedRemovedCards);
});

test.each`
    original | modified | expectedAddedCards
    ${ [] } | ${ [] } | ${ [] }

    ${ [card(0, 1)] } | ${ [card(0, 1)] } | ${ [] }
    ${ [card(0, 1)] } | ${ [card(0, 3)] } | ${ [card(0, 2)] }
    ${ [card(0, 3)] } | ${ [card(0, 1)] } | ${ [] }

    ${ [card(0, 1)] } | ${ [card(1, 1)] } | ${ [card(1, 1)] }    
    ${ [card(0, 1)] } | ${ [card(1, 3)] } | ${ [card(1, 3)] }

    ${ [card(0, 1), card(1,1), card(2,1)] } | ${ [card(0, 1), card(1,1), card(2,1)] } | ${ [] }
    ${ [card(0, 1), card(1,1), card(2,1)] } | ${ [card(0, 1), card(3,1), card(2,1)] } | ${ [card(3,1)] }
`('Given decks original $original and modified $modified, when getting the cards changes, then the added cards should be $expectedAddedCards', ( { original, modified, expectedAddedCards} ) => {
    let cardChanges = getCardsInDeckChanges(original, modified);

    expect(cardChanges.addedCards).toEqual(expectedAddedCards);
});





test('Given an original deck with a card0 and a deck with a card1, when getting card changes, then the removed cards should be card0', () => {    

    let deck0: Deck = new Deck();
    let deck1: Deck = new Deck();
    
    deck0.addCard(new CardInDeck('card0', 1));
    deck1.addCard(new CardInDeck('card1', 1));

    let cardChanges = getCardChanges(deck0, deck1);

    expect(cardChanges.removedCards).toEqual([new CardInDeck('card0', 1)]);    
});

test('Given an original deck with a card0 and a deck with a card1, when getting card changes, then the added cards should be card1', () => {    

    let deck0: Deck = new Deck();
    let deck1: Deck = new Deck();
    
    deck0.addCard(new CardInDeck('card0', 1));
    deck1.addCard(new CardInDeck('card1', 1));

    let cardChanges = getCardChanges(deck0, deck1);
    
    expect(cardChanges.addedCards).toEqual([new CardInDeck('card1', 1)]);
});