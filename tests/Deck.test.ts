import { Deck, CardInDeck } from "../src/Deck";

test('Deck created', async () => {        
    let deck = new Deck();

    let cardsInDeck: CardInDeck[] = deck.getCards();

    expect(cardsInDeck).toEqual([]);
});

function createCardsInDeckFromAmmounts(ammounts: number[]) {
    return ammounts.map( (ammount, i) => new CardInDeck('cardName' + i, ammount) );
}

test.each`
    cardAmmounts
    ${ [1] },
    ${ [2] },
    ${ [3] },
    ${ [1, 8] }
    ${ [1, 8, 9, 10, 4, 7] }
`('cartas diferentes en el mazo, con cantidad dummy para restear nombre: %i', ( {cardAmmounts}: {cardAmmounts: number[]} ) => {
    let deck = new Deck();    
    let cardsToAdd = createCardsInDeckFromAmmounts(cardAmmounts);

    cardsToAdd.forEach( cardToAdd => deck.addCard(cardToAdd) );
    let cardsInDeck: CardInDeck[] = deck.getCards();

    expect(cardsInDeck.length).toEqual(cardsToAdd.length);
    cardsInDeck.forEach( (_, i) => {
        expect(cardsInDeck[i].name).toEqual(cardsToAdd[i].name);
        expect(cardsInDeck[i].ammount).toEqual(cardsToAdd[i].ammount);
    });        
});

//TODO: que pasa si agrego dos cartas con el mismo codigo