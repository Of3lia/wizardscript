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
    constructor(posX: number, posY:number, totalCols:number, totalRows:number, type:TileType = TileType.Grass) {

        if(posX != 0){
            this.posX = ((posX * 100) / totalCols).toString() + '%';
        }
        if(posY != 0){
            this.posY = ((posY * 100) / totalRows).toString() + '%';
        }
        this.type = type;

        this.width = (100 / totalCols).toString() + '%';
        this.height = (100 / totalRows).toString() + '%';
    }
    //#region getters and setters posX, posY
    private _posX: string = '0%';
    public get posX(): string {
        return this._posX;
    }
    public set posX(value: string) {
        this._posX = value;
    }
    private _posY: string = '0%';
    public get posY(): string {
        return this._posY;
    }
    public set posY(value: string) {
        this._posY = value;
    }
    //#endregion
    width:string = '';
    height:string = '';

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