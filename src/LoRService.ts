import { LoRAPI } from "./LoRAPI";

export class LoRService {

    private callbacks: ((isGameActive: boolean) => void)[] =  [];
    private activeGameInterval: NodeJS.Timeout | null = null;

    public async isGameActive(): Promise<boolean> {
        let activeDeck = await LoRAPI.getActiveDeck();
        if( activeDeck.DeckCode == null || activeDeck.CardsInDeck == null ) {
            return false;
        }        
        return true;
    }
    
    public registerActiveGameCallback(callback: (isGameActive: boolean) => void) {
        this.callbacks.push(callback);
    }

    public startTrackingActiveGame() {
        //Try rxjs to first notify and then start interval
        this.activeGameInterval = global.setInterval( () => this.notifyObservers().then(), 2000);
    }

    private async notifyObservers(){        
        let isActive = await this.isGameActive();        
        for(let callback of this.callbacks) {
            callback(isActive);
        }        
    }

    public stopTrackingActiveGame() {
        if(this.activeGameInterval)
            clearInterval(this.activeGameInterval);
    }
}