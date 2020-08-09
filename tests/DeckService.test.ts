import { DeckService } from '../src/DeckService';
import { ActiveDeck } from '../src/ActiveDeck';
import { ActiveDeckMocks, PositionalRectanglesMocks } from './LoRAPIMocks';
import { Deck, Card } from '../src/Deck';

import { DeckBuildingMenuSource } from '../src/DeckBuildingMenuSource';
import { ActiveGameSource } from '../src/ActiveGameSource'




test('DeckService with ActiveGameSource, empty deck', async () => {
    ActiveDeckMocks.Return(ActiveDeckMocks.emptyActiveDeck);
    let service = new DeckService();

    let deck: ActiveDeck = await service.getCurrentDeckFromActiveGame(new ActiveGameSource());

    expect(deck.DeckCode).toBeNull;
    expect(deck.CardsInDeck).toBeNull;
});

test('DeckService with ActiveGameSource, deck with cards', async () => {
    ActiveDeckMocks.Return(ActiveDeckMocks.activeDeckWithCards);
    let service = new DeckService();

    let deck: ActiveDeck = await service.getCurrentDeckFromActiveGame(new ActiveGameSource());

    expect(deck.DeckCode).toEqual(ActiveDeckMocks.activeDeckWithCards.DeckCode);
    expect(deck.CardsInDeck).toEqual(ActiveDeckMocks.activeDeckWithCards.CardsInDeck);
});



test('DeckService with DeckBuildingMenuSource, empty deck', async () => {
    PositionalRectanglesMocks.Return(PositionalRectanglesMocks.emptyPositionalRectangles);
    let service = new DeckService();

    let deck: Deck = await service.getCurrentDeckFromMenu(new DeckBuildingMenuSource());

    expect(deck.getCards()).toEqual([]);
});

test('DeckService with DeckBuildingMenuSource, deck with cards', async () => {
    PositionalRectanglesMocks.Return(PositionalRectanglesMocks.deckMenuPositonalRectanlglesWithCardsInDeck);
    let service = new DeckService();

    let deck: Deck = await service.getCurrentDeckFromMenu(new DeckBuildingMenuSource());

    expect(deck.getCards().length).toEqual(17);
});



















test('Given an Active Game deck source and an empty active deck, when getting the deck, an empty deck should be returned', async () => {
    ActiveDeckMocks.Return(ActiveDeckMocks.emptyActiveDeck);
    let deckSource = new ActiveGameSource();

    let deck: ActiveDeck = await deckSource.getCurrentDeck();

    expect(deck.DeckCode).toBeNull;
    expect(deck.CardsInDeck).toBeNull;
});

test('Given an Active Game deck source and an active deck with cards, when getting the deck, a deck with cards should be returned', async () => {
    ActiveDeckMocks.Return(ActiveDeckMocks.activeDeckWithCards);
    let deckSource = new ActiveGameSource();

    let deck: ActiveDeck = await deckSource.getCurrentDeck();


    expect(deck.DeckCode).toEqual(ActiveDeckMocks.activeDeckWithCards.DeckCode);
    expect(deck.CardsInDeck).toEqual(ActiveDeckMocks.activeDeckWithCards.CardsInDeck);
});


test('Given a Deck Building Menu deck source and empty positional rectangles, when getting the deck, an empty deck should be returned', async () => {
    PositionalRectanglesMocks.Return(PositionalRectanglesMocks.emptyPositionalRectangles);
    let deckSource = new DeckBuildingMenuSource()
    let deck: Deck = await deckSource.getCurrentDeck();

    expect(deck.getCards()).toEqual([]);
});

test('Given a Deck Building Menu deck source and positional rectangles with cards in deck, when getting the deck, a deck with cards shoud be returned', async () => {
    PositionalRectanglesMocks.Return(PositionalRectanglesMocks.deckMenuPositonalRectanlglesWithCardsInDeck);
    let deckSource = new DeckBuildingMenuSource();
    let deck: Deck = await deckSource.getCurrentDeck();

    expect(deck.getCards().length).toEqual(17);
});
