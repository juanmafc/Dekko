import { ActiveDeck } from './ActiveDeck';
import { LoRAPI } from './LoRAPI'

export class ActiveGameSource {

    public async getCurrentDeck(): Promise<ActiveDeck> {
        return await LoRAPI.getActiveDeck();
    }

}