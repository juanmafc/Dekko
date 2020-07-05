import { LoRService } from './LoRService'
import { ActiveDeckMocks } from './LoRAPIMocks'

test('Given a LoRService and an empty active deck, when asking if the game is active, false should be returned', async () => {    
    ActiveDeckMocks.Return(ActiveDeckMocks.emptyActiveDeck);
    let lorService = new LoRService();

    let gameIsActive = await lorService.isGameActive();

    expect(gameIsActive).toBeFalsy();
});

test('Given a LoRService and an active deck with cards, when asking if the game is active, true should be returned', async () => {    
    ActiveDeckMocks.Return(ActiveDeckMocks.activeDeckWithCards);
    let lorService = new LoRService();

    let gameIsActive = await lorService.isGameActive();

    expect(gameIsActive).toBeTruthy();
});

test('Given a LoRService and an empty active deck, when the tracking of an active game starts and time passes, then the registered callback should be called with false', async done => {
    let callback = (isActive: boolean) => {        
        expect(isActive).toBeFalsy();
        done();
    };
    ActiveDeckMocks.Return(ActiveDeckMocks.emptyActiveDeck);
    let lorService = new LoRService();
    jest.useFakeTimers();
    
    lorService.registerActiveGameCallback(callback);
    lorService.startTrackingActiveGame();
    jest.advanceTimersByTime(2500);
    lorService.stopTrackingActiveGame();    
});

test.only('Given a LoRService and an active deck with cards, when the tracking of an active game starts and time passes, then the registered callback should be called with true', async done => {
    let callback = (isActive: boolean) => {        
        expect(isActive).toBeTruthy();
        done();
    };
    ActiveDeckMocks.Return(ActiveDeckMocks.activeDeckWithCards);
    let lorService = new LoRService();
    jest.useFakeTimers();
    
    lorService.registerActiveGameCallback(callback);
    lorService.startTrackingActiveGame();
    jest.advanceTimersByTime(2500);
    lorService.stopTrackingActiveGame();    
});