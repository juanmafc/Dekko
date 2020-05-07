export class LoRSet {
    public constructor( public cards: Card[] ){};
}

export interface Card {
    associatedCards: any[];
    associatedCardRefs: string[];
    assets: Asset[];
    region: string;
    regionRef: string;
    attack: number;
    cost: number;
    health: number;
    description: string;
    descriptionRaw: string;
    levelupDescription: string;
    levelupDescriptionRaw: string;
    flavorText: string;
    artistName: string;
    name: string;
    cardCode: string;
    keywords: string[];
    keywordRefs: string[];
    spellSpeed: string;
    spellSpeedRef: string;
    rarity: string;
    rarityRef: string;
    subtype: string;
    subtypes: string[];
    supertype: string;
    type: string;
    collectible: boolean;
}

interface Asset {
    gameAbsolutePath: string;
    fullAbsolutePath: string;
}