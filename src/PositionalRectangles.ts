export interface PositionalRectangles {
    PlayerName:   string | null;
    OpponentName: string | null;
    GameState:    string;
    Screen:       Screen;
    Rectangles:   Rectangle[];
}

export interface Rectangle {
    CardID:      number;
    CardCode:    string;
    TopLeftX:    number;
    TopLeftY:    number;
    Width:       number;
    Height:      number;
    LocalPlayer: boolean;
}

export interface Screen {
    ScreenWidth:  number;
    ScreenHeight: number;
}