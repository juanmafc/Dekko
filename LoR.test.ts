import {Deck, Card} from './Deck'
import {CardChanges, getCardChanges} from './CardChanges'


const card0 = new Card("code0", "card0");
const card1 = new Card("code1", "card1");
const card2 = new Card("code2", "card2");
const card3 = new Card("code3", "card3");

test.each([
    [ new Deck( [] ),  new Deck( [] ), [], [] ],
    [ new Deck( [] ),  new Deck( [ card0 ] ), [], [card0] ],
    [ new Deck( [card0] ),  new Deck( [] ), [card0], [] ],
    [ new Deck( [card0] ),  new Deck( [card1] ), [card0], [card1]],
    [ new Deck( [card0] ),  new Deck( [card0] ), [], []],
    [ new Deck( [card0, card1, card2] ),  new Deck( [card0, card1, card2] ), [], []],
    [ new Deck( [card0, card1, card2] ),  new Deck( [card0, card3, card2] ), [card1], [card3]],
])('Given an original %o and a modified %o, when getting the card changes between them, then the removed cards should be %o and the added cards should be %o', (originalDeck: Deck, modifiedDeck: Deck, expectedRemovedCards: Card[], expectedAddedCards: Card[]) => {    
    let cardChanges:CardChanges = getCardChanges(originalDeck, modifiedDeck);
    expect(cardChanges.removedCards).toEqual(expectedRemovedCards);
    expect(cardChanges.addedCards).toEqual(expectedAddedCards);
});