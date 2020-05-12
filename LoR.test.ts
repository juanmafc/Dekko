import {Deck, Card} from './Deck'
import {CardChanges, getCardChanges} from './CardChanges'

test('Given original and modified empty decks, when getting the card changes between them, then the removed and added cards should be empty', () => {
    let originalDeck: Deck = new Deck( [] );
    let modifiedDeck: Deck = new Deck( [] );
    
    let cardChanges:CardChanges = getCardChanges(originalDeck, modifiedDeck);
    
    expect(cardChanges.removedCards).toHaveLength(0);
    expect(cardChanges.addedCards).toHaveLength(0);
});


test('Given an original empty deck and a modified deck with one card, when getting the card changes between them, then the removed cards should be empty and the added cards should only contain that one card', () => {
    let originalDeck: Deck = new Deck( [] );
    let modifiedDeck: Deck = new Deck( [ new Card("code0", "card0") ] );
    
    let cardChanges:CardChanges = getCardChanges(originalDeck, modifiedDeck);

    expect(cardChanges.removedCards).toHaveLength(0);
    expect(cardChanges.addedCards).toEqual( [new Card("code0", "card0")] );
});

test('Given an original deck with one card and an empty modified deck, when getting the card changes between them, then the removed cards should only contain that one card and the added cards should be empty', () => {
    let originalDeck: Deck = new Deck( [ new Card("code0", "card0") ] );
    let modifiedDeck: Deck = new Deck( [] );
    
    let cardChanges:CardChanges = getCardChanges(originalDeck, modifiedDeck);

    expect(cardChanges.removedCards).toEqual( [new Card("code0", "card0")] );
    expect(cardChanges.addedCards).toHaveLength(0);
});

test('Given an original deck with one card and a modified deck with one different card, when getting the card changes between them, then the removed cards should only contain the first one and the added cards should only contain the new different one', () => {
    let originalDeck: Deck = new Deck( [ new Card("code0", "card0") ] );
    let modifiedDeck: Deck = new Deck( [ new Card("code1", "card1") ] );
    
    let cardChanges:CardChanges = getCardChanges(originalDeck, modifiedDeck);

    expect(cardChanges.removedCards).toEqual( [new Card("code0", "card0")] );
    expect(cardChanges.addedCards).toEqual( [new Card("code1", "card1")] );
});


test('Given an original deck with one card and an equal modified deck, when getting the card changes between them, then the removed and added cards should be empty', () => {
    let originalDeck: Deck = new Deck( [ new Card("code0", "card0") ] );
    let modifiedDeck: Deck = new Deck( [ new Card("code0", "card0") ] );        

    let cardChanges:CardChanges = getCardChanges(originalDeck, modifiedDeck);

    expect(cardChanges.removedCards).toHaveLength(0);
    expect(cardChanges.addedCards).toHaveLength(0);
});

test('Given an original deck with multiple cards and an equal modified deck, when getting the card changes between them, then the removed and added cards should be empty', () => {
    let originalDeck: Deck = new Deck( [
         new Card("code0", "card0"),
         new Card("code1", "card1"),
         new Card("code2", "card2")
    ]);
    
    let modifiedDeck: Deck = new Deck( [
        new Card("code0", "card0"),
        new Card("code1", "card1"),
        new Card("code2", "card2")
    ]);

    let cardChanges:CardChanges = getCardChanges(originalDeck, modifiedDeck);

    expect(cardChanges.removedCards).toHaveLength(0);
    expect(cardChanges.addedCards).toHaveLength(0);
});

test('Given an original deck with multiple cards and a modified deck with one different card, when getting the card changes between them, then the removed cards should only contain the first one and the added cards should only contain the new different one', () => {
    let originalDeck: Deck = new Deck( [
         new Card("code0", "card0"),
         new Card("code1", "card1"),
         new Card("code2", "card2")
    ]);
    
    let modifiedDeck: Deck = new Deck( [
        new Card("code0", "card0"),
        new Card("code3", "card3"),
        new Card("code2", "card2")
    ]);

    let cardChanges:CardChanges = getCardChanges(originalDeck, modifiedDeck);

    expect(cardChanges.removedCards).toEqual( [new Card("code1", "card1")] );
    expect(cardChanges.addedCards).toEqual( [new Card("code3", "card3")] );
});