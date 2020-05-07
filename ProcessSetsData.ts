import { FileUtils } from './FileUtils';
import { LoRSet, Card } from './LoRSet';

async function readLoRSetFromFile(path: string): Promise<LoRSet> {
    const cards = await FileUtils.readJsonFromFile<Card[]>(path);
    return new LoRSet(cards);
}

let setsPromises: Promise<LoRSet>[] = [
    readLoRSetFromFile('set1-lite-en_us/en_us/data/set1-en_us.json'),
    readLoRSetFromFile('./set2-lite-en_us/en_us/data/set2-en_us.json')
];

Promise.all(setsPromises).then( (sets: LoRSet[]) => {
    const allCards: Card[] = sets.reduce( (accumCards: Card[], currentSet: LoRSet )  => accumCards.concat(currentSet.cards), []);    
    FileUtils.writeJsonToFileSync('LoRCards2.json', allCards);
});