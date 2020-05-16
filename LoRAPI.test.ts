import { LoRAPI } from './LoRAPI';
import { ActiveDeckMocks, PositionalRectanglesMocks} from './LoRAPIMocks'

test('Given the LoRAPI, when getting an the active deck outside of a game, an empty deck should be returned', async () => {    
    ActiveDeckMocks.Return(ActiveDeckMocks.emptyActiveDeck);
    const activeDeck = await LoRAPI.getActiveDeck();
    expect(activeDeck).toEqual(ActiveDeckMocks.emptyActiveDeck);
});


test('Given the LoRAPI, when getting the active deck during a game, an active deck with cards should be returned', async () => {
    ActiveDeckMocks.Return(ActiveDeckMocks.activeDeckWithCards);
    const activeDeck = await LoRAPI.getActiveDeck();
    expect(activeDeck).toEqual(ActiveDeckMocks.activeDeckWithCards);
});

test('Given the LoRAPI, when getting the postional rectangles in the main menu, empty positional rectangles should be returned', async () => {
    PositionalRectanglesMocks.Return(PositionalRectanglesMocks.emptyPositionalRectangles);
    const positionalRectangles = await LoRAPI.getPositionalRectangles();
    expect(positionalRectangles).toEqual(PositionalRectanglesMocks.emptyPositionalRectangles);
});

test('Given the LoRAPI, when getting the postional rectangles in the deck menu, positional rectangles related to many card should be returned', async () => {
    PositionalRectanglesMocks.Return(PositionalRectanglesMocks.deckMenuPositonalRectanlglesWithCardsInDeck);
    const positionalRectangles = await LoRAPI.getPositionalRectangles();
    expect(positionalRectangles).toEqual(PositionalRectanglesMocks.deckMenuPositonalRectanlglesWithCardsInDeck);
});
