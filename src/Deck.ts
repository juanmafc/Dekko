


export class Deck{    
    
    private cardsInDeck: CardInDeck[] = [];    

    public addCard(card: CardInDeck) {
        this.cardsInDeck.push(card);
    }

    public getCards(): CardInDeck[] {
        return this.cardsInDeck; //TODO: a copy should be returned
    }
    
}

export class Card{
    
    static AreEqual(card1: Card, card2: Card): boolean {
        return card1.code === card2.code && card1.name === card2.name;
    } 

    constructor( public code: string, public name: string) {}
}

export class CardInDeck {

    static AreEqual(card1: CardInDeck, card2: CardInDeck): boolean {
        return card1.name === card2.name;
    } 

    constructor(
        public name: string,
        public ammount: number
    ){};    
}
