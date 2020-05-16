import nock = require('nock');

import { ActiveDeck } from './ActiveDeck';
import { PositionalRectangles } from './PositionalRectangles';


export namespace ActiveDeckMocks {
    
    export function Return(activeDeck: ActiveDeck) {
        nock('http://localhost:21337')
        .get('/static-decklist')
        .reply(200, activeDeck);
    }

    export const emptyActiveDeck: ActiveDeck = { 
        DeckCode:null,
        CardsInDeck:null
    };
    
    export const activeDeckWithCards: ActiveDeck = {
        DeckCode: 'CEBQCAQDBIBACAYLF4BQEBADAUEAGAQBAQTDMBACAQBAMCIKAUAQGDAQCMMB6AA',
        CardsInDeck: {
          '02NX010': 3,
          '01NX011': 3,
          '01NX047': 3,
          '02PZ003': 3,
          '02PZ005': 3,
          '02PZ008': 3,
          '01PZ038': 2,
          '01PZ054': 2,
          '02PZ002': 2,
          '02PZ006': 2,
          '02PZ009': 2,
          '02PZ010': 2,
          '01NX012': 2,
          '01NX016': 2,
          '01NX019': 2,
          '01NX024': 2,
          '01NX031': 2
        }
      };

}

export namespace PositionalRectanglesMocks {
    
    export function Return(positionalRectangles: PositionalRectangles) {
        nock('http://localhost:21337')
        .get('/positional-rectangles')
        .reply(200, positionalRectangles);
    }

    export const emptyPositionalRectangles: PositionalRectangles = {
        PlayerName: null,
        OpponentName: null,
        GameState: 'Menus',
        Screen: { ScreenWidth: 1920, ScreenHeight: 1080 },
        Rectangles: []
    };
      
    export const deckMenuPositonalRectanlglesWithCardsInDeck = {
        PlayerName: null,
        OpponentName: null,
        GameState: 'Menus',
        Screen: { ScreenWidth: 1920, ScreenHeight: 1080 },
        Rectangles: [
          {
            CardID: -1,
            CardCode: '01PZ008',
            TopLeftX: 508,
            TopLeftY: 932,
            Width: 274,
            Height: 399,
            LocalPlayer: true
          },
          {
            CardID: -1,
            CardCode: '01NX020',
            TopLeftX: 856,
            TopLeftY: 932,
            Width: 274,
            Height: 399,
            LocalPlayer: true
          },
          {
            CardID: -1,
            CardCode: '01PZ036',
            TopLeftX: 1205,
            TopLeftY: 932,
            Width: 274,
            Height: 399,
            LocalPlayer: true
          },
          {
            CardID: -1,
            CardCode: '01NX042',
            TopLeftX: 1553,
            TopLeftY: 932,
            Width: 274,
            Height: 399,
            LocalPlayer: true
          },
          {
            CardID: -1,
            CardCode: '01PZ040',
            TopLeftX: 508,
            TopLeftY: 470,
            Width: 274,
            Height: 399,
            LocalPlayer: true
          },
          {
            CardID: -1,
            CardCode: '01PZ056',
            TopLeftX: 856,
            TopLeftY: 470,
            Width: 274,
            Height: 399,
            LocalPlayer: true
          },
          {
            CardID: -1,
            CardCode: '02NX007',
            TopLeftX: 1205,
            TopLeftY: 470,
            Width: 274,
            Height: 399,
            LocalPlayer: true
          },
          {
            CardID: -1,
            CardCode: '02PZ008',
            TopLeftX: 1553,
            TopLeftY: 470,
            Width: 274,
            Height: 399,
            LocalPlayer: true
          },
          {
            CardID: -1,
            CardCode: '01NX006',
            TopLeftX: 508,
            TopLeftY: 8,
            Width: 274,
            Height: 399,
            LocalPlayer: true
          },
          {
            CardID: -1,
            CardCode: '01NX038',
            TopLeftX: 856,
            TopLeftY: 8,
            Width: 274,
            Height: 399,
            LocalPlayer: true
          },
          {
            CardID: -1,
            CardCode: '01PZ047',
            TopLeftX: 1205,
            TopLeftY: 8,
            Width: 274,
            Height: 399,
            LocalPlayer: true
          },
          {
            CardID: -1,
            CardCode: '01PZ027',
            TopLeftX: 1553,
            TopLeftY: 8,
            Width: 274,
            Height: 399,
            LocalPlayer: true
          },
          {
            CardID: -1,
            CardCode: '01NX012',
            TopLeftX: 0,
            TopLeftY: 825,
            Width: 410,
            Height: 82,
            LocalPlayer: true
          },
          {
            CardID: -1,
            CardCode: '01PZ054',
            TopLeftX: 0,
            TopLeftY: 743,
            Width: 410,
            Height: 82,
            LocalPlayer: true
          },
          {
            CardID: -1,
            CardCode: '01PZ038',
            TopLeftX: 0,
            TopLeftY: 661,
            Width: 410,
            Height: 82,
            LocalPlayer: true
          },
          {
            CardID: -1,
            CardCode: '02PZ009',
            TopLeftX: 0,
            TopLeftY: 579,
            Width: 410,
            Height: 82,
            LocalPlayer: true
          },
          {
            CardID: -1,
            CardCode: '01NX047',
            TopLeftX: 0,
            TopLeftY: 497,
            Width: 410,
            Height: 82,
            LocalPlayer: true
          },
          {
            CardID: -1,
            CardCode: '01NX031',
            TopLeftX: 0,
            TopLeftY: 415,
            Width: 410,
            Height: 82,
            LocalPlayer: true
          },
          {
            CardID: -1,
            CardCode: '01NX016',
            TopLeftX: 0,
            TopLeftY: 332,
            Width: 410,
            Height: 82,
            LocalPlayer: true
          },
          {
            CardID: -1,
            CardCode: '02PZ010',
            TopLeftX: 0,
            TopLeftY: 250,
            Width: 410,
            Height: 82,
            LocalPlayer: true
          },
          {
            CardID: -1,
            CardCode: '01NX019',
            TopLeftX: 0,
            TopLeftY: 168,
            Width: 410,
            Height: 82,
            LocalPlayer: true
          },
          {
            CardID: -1,
            CardCode: '02PZ005',
            TopLeftX: 0,
            TopLeftY: 86,
            Width: 410,
            Height: 82,
            LocalPlayer: true
          },
          {
            CardID: -1,
            CardCode: '01NX011',
            TopLeftX: 0,
            TopLeftY: 4,
            Width: 410,
            Height: 82,
            LocalPlayer: true
          },
          {
            CardID: -1,
            CardCode: '02PZ006',
            TopLeftX: 0,
            TopLeftY: -77,
            Width: 410,
            Height: 82,
            LocalPlayer: true
          },
          {
            CardID: -1,
            CardCode: '02PZ003',
            TopLeftX: 0,
            TopLeftY: -159,
            Width: 410,
            Height: 82,
            LocalPlayer: true
          },
          {
            CardID: -1,
            CardCode: '01NX024',
            TopLeftX: 0,
            TopLeftY: -241,
            Width: 410,
            Height: 82,
            LocalPlayer: true
          },
          {
            CardID: -1,
            CardCode: '02PZ008',
            TopLeftX: 0,
            TopLeftY: -323,
            Width: 410,
            Height: 82,
            LocalPlayer: true
          },
          {
            CardID: -1,
            CardCode: '02NX010',
            TopLeftX: 0,
            TopLeftY: -405,
            Width: 410,
            Height: 82,
            LocalPlayer: true
          },
          {
            CardID: -1,
            CardCode: '02PZ002',
            TopLeftX: 0,
            TopLeftY: -487,
            Width: 410,
            Height: 82,
            LocalPlayer: true
          }
        ]
    }
}
