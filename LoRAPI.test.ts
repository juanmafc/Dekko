import { LoRAPI } from './LoRAPI';
import { ActiveDeckMocks, PositionalRectanglesMocks} from './LoRAPIMocks'

test('Given LoRAPI when getting an empty active deck', async () => {    
    ActiveDeckMocks.Return(ActiveDeckMocks.emptyActiveDeck);
    const activeDeck = await LoRAPI.getActiveDeck();
    expect(activeDeck).toEqual(ActiveDeckMocks.emptyActiveDeck);
});


test('Given LoRAPI when getting an active deck during a game', async () => {
    ActiveDeckMocks.Return(ActiveDeckMocks.activeDeckWithCards);
    const activeDeck = await LoRAPI.getActiveDeck();
    expect(activeDeck).toEqual(ActiveDeckMocks.activeDeckWithCards);
});

test('Given LoRAPI when getting an postional ectangles in main menu', async () => {
    PositionalRectanglesMocks.Return(PositionalRectanglesMocks.emptyPositionalRectangles);
    const positionalRectangles = await LoRAPI.getPositionalRectangles();
    expect(positionalRectangles).toEqual(PositionalRectanglesMocks.emptyPositionalRectangles);
});

test('Given LoRAPI when getting an postional ectangles in deck menu', async () => {
    PositionalRectanglesMocks.Return(PositionalRectanglesMocks.deckMenuPositonalRectanlglesWithCardsInDeck);
    const positionalRectangles = await LoRAPI.getPositionalRectangles();
    expect(positionalRectangles).toEqual(PositionalRectanglesMocks.deckMenuPositonalRectanlglesWithCardsInDeck);
});
