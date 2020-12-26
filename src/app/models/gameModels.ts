export class Level{
    constructor(levelNumber:number, rows:number, cols:number) {
        this.levelNumber = levelNumber;
        this.rows = rows;
        this.cols = cols;
    }
    levelNumber:number;
    rows: number;
    cols: number;
    units:Unit[] = [];
}

export class Tile{
    constructor(posX: number, posY:number, type:TileType = TileType.Grass) {
        this.posX = posX;
        this.posy = posY;
        this.type = type;
    }
    posX:number;
    posy:number;
    type:TileType;
}

enum TileType{
    Grass,
    Water,
    Lava
}

export class Unit{
    constructor(posX: number, posY:number) {
        this.posX = posX;
        this.posY = posY;
    }
    posX:number;
    posY:number
}