import { FileUtils } from './FileUtils';
import { Card as LoRSetCard} from './LoRSet'

export class LoRCardRepository {
    
    public constructor(private jsonFilepath: string){}

    public getCodeToNameMap(): Map<string, string>{
        
        const setCards = FileUtils.readFileToJsonSync<LoRSetCard[]>(this.jsonFilepath);
        //const codeToNameMap = setCards.reduce( (map: any, card:any) => map[card.cardCode] = card.name, {});    
        const codeToNameMap = setCards.reduce<Map<string, string>>(
            (map: Map<string, string>, card:LoRSetCard) => map.set(card.cardCode, card.name), new Map()
        );
        //const codeToNameMap = new Map<string, string>( setCards.map( (card:Card) => [card.cardCode, card.name] ));    
        return codeToNameMap;
    }

}