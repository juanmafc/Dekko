export interface ActiveDeck {
    DeckCode:   string | null;
    CardsInDeck: { [cardCode: string]: number } | null;
}