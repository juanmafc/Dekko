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
`('cartas  en uno, cartas en otro, expected', ( { original, modified, expectedRemovedCards} ) => {
    let cardChanges = getCardsInDeckChanges(original, modified);
    
    expect(cardChanges.removedCardsInDeck).toEqual(expectedRemovedCards);
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
`('cartas  en uno, cartas en otro, expected', ( { original, modified, expectedAddedCards} ) => {
    let cardChanges = getCardsInDeckChanges(original, modified);

    expect(cardChanges.addedCardsInDeck).toEqual(expectedAddedCards);
});



test('changes entre decks', () => {    

    let deck0: Deck = new Deck();
    let deck1: Deck = new Deck();
    
    deck0.addCard(new CardInDeck('card0', 1));
    deck1.addCard(new CardInDeck('card1', 1));

    let cardChanges = getCardChanges(deck0, deck1);

    expect(cardChanges.removedCardsInDeck).toEqual([new CardInDeck('card0', 1)]);
    expect(cardChanges.addedCardsInDeck).toEqual([new CardInDeck('card1', 1)]);
});