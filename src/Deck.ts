


export class Deck{    
    
    private cardsInDeck: CardInDeck[] = [];    

    public addCard(card: CardInDeck) {
        this.cardsInDeck.push(card);
    }

    public getCards(): CardInDeck[] {
        return this.cardsInDeck; //TODO: a copy should be returned
    }
    
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
