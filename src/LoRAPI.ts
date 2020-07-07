import axios from 'axios'
import { ActiveDeck } from './ActiveDeck';
import { PositionalRectangles } from './PositionalRectangles';

export class LoRAPI {

    public static async getActiveDeck(): Promise<ActiveDeck> {
        return (await axios.get<ActiveDeck>('http://localhost:21337/static-decklist')).data;
    }


    public static async getPositionalRectangles(): Promise<PositionalRectangles> {
        return (await axios.get<PositionalRectangles>('http://localhost:21337/positional-rectangles')).data;
    }
    
}