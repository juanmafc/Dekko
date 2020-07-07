export class Deck{    
    
    constructor(public cards: Card[] ) {}

    public contains(card: Card): boolean {        
        return this.cards.some( (deckCard:Card) => Card.AreEqual(deckCard, card) );
    }
}

export class Card{
    
    static AreEqual(card1: Card, card2: Card): boolean {
        return card1.code === card2.code && card1.name === card2.name;
    } 

    constructor( public code: string, public name: string) {}
}
