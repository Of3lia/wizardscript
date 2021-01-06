export class Level{
    constructor(levelNumber:number, title:string, rows:number, cols:number, tiles:Tile[]) {
        this.levelNumber = levelNumber;
        this.title = title;
        this.rows = rows;
        this.cols = cols;
        this.tiles = tiles;
        this.dialogs
    }
    levelNumber:number;
    title:string;
    rows: number;
    cols: number;
    tiles:Tile[];
    units:Unit[] = [];
    checkPoints?:CheckPoint[] = [];
    dialogs?:Dialog[];
    helpText?:string='';
}

export class Dialog { 
    constructor(id:number, content:string) {
     this.id=id; this.content=content;   
    }    id:number; content:string 
}

export interface Positionable{
    posX: number;
    posY: number;
    percentX: string;
    percentY: string;
    width:string;
    height:string;
}

export class iPositionable implements Positionable{
    constructor(posX: number, posY:number, totalCols:number, totalRows:number,) {
        if(posX != 0){
            this.percX = ((posX * 100) / totalCols);
            this.percentX = this.percX + '%';
        }
        if(posY != 0){
            this.percY = ((posY * 100) / totalRows);
            this.percentY = this.percY + '%';
        }

        this.posX = posX;
        this.posY = posY;

        this.width = (100 / totalCols).toString() + '%';
        this.height = (100 / totalRows).toString() + '%';
    }
    public posX: number;
    public posY: number;
    public percX:number=0;
    public percY:number=0;
    public percentX: string = '0%';
    public percentY: string = '0%';
    width:string = '';
    height:string = '';
}

export class CheckPoint extends iPositionable {

    isActivated:boolean = false;
    step:number;
    sprite:string = "./../../assets/img/checkPointFlag.svg";
    writeInConsoleAgain:boolean;

    constructor(posX: number, posY:number, totalCols:number, totalRows:number, step:number, writeInConsoleAgain:boolean = false) {
        super(posX, posY, totalCols, totalRows);

        this.step = step;
        this.writeInConsoleAgain = writeInConsoleAgain;
    }
}

export class Tile extends iPositionable{
    constructor(posX: number, posY:number, totalCols:number, totalRows:number, type:TileType = TileType.Grass) {
        super(posX, posY, totalCols, totalRows);
      
        this.type = type;
        switch(type){
            case TileType.Lava:
                this.color = 'rgb(220, 20, 20)';
            break;
            case TileType.Water:
                this.color = 'rgb(61, 206, 216)';
            break;
        }
    }
    type:TileType;
    public color:string = 'rgb(100, 180, 80)';
    checkPoint:CheckPoint | undefined;
}

export enum TileType{
    Grass,
    Water,
    Lava
}

export class Unit extends iPositionable{
    constructor(posX: number, posY:number, totalCols:number, totalRows:number, level?:Level) {
        super(posX, posY, totalCols, totalRows);

        this.totalCols =  totalCols;
        this.totalRows =  totalRows;

        this.totalSteps = 60;
        this.steps = 0;
        this.speed = (100 / totalCols / this.totalSteps);
    }
    sprite:string = "";

    totalCols:number;
    totalRows:number;

    private movement:UnitMovement = UnitMovement.Idle;

    totalSteps:number;
    steps:number;
    speed:number;
    movements:UnitMovement[] = [];
    
    checkPoint?:CheckPoint;
    checkPointWriteInConsoleAgain?:boolean;

    private _level?: Level | undefined;
    public get level(): Level | undefined {
        return this._level;
    }
    public set level(value: Level | undefined) {
        this._level = value;
        // Initialize Tiles
        this.tiles = this._level!.tiles;

          // Initialize Map
        this.map = new Array(this.level!.cols);
        var k:number = 0;
        for(var i = 0; i < this.level!.rows; i++){
            this.map[i] = new Array(this.level!.rows);
            for(var j = 0; j < this.level!.cols; j++){
            this.map[i][j] = this.tiles[k]; k++;
            }
        }
    }
    tiles:Tile[] = [];
    map:Tile[][] = [];

    private _state: UnitState = UnitState.Alive;
    public get state(): UnitState {
        return this._state;
    }
    public set state(value: UnitState) {
        this._state = value;
    }

    public update(){
        this.stateMachine();
    }

    private stateMachine(){
        this.move();
    }

    private move(){
        if(this.movements.length > 0){
            if(this.steps > 0){
                this.steps--;
                if(this.movements[0] == UnitMovement.Left){ this.percX -= this.speed; }
                if(this.movements[0] == UnitMovement.Right){ this.percX += this.speed; }
                if(this.movements[0] == UnitMovement.Up){ this.percY -= this.speed; }
                if(this.movements[0] == UnitMovement.Down){ this.percY += this.speed; }
                
                this.percentX = this.percX + '%';
                this.percentY = this.percY + '%';
            }else{
                // this.setNewPos(this.movements[0])
                this.movements.shift();
                if(this.movements.length > 0){ this.steps = this.totalSteps; } 
                else { this.movement = UnitMovement.Idle; 
                       this.setState(this.movement);
                }
            }
        }
    }

    public moveTo(direction:UnitMovement){
        switch (direction){
            case UnitMovement.Left:
                this.movement = UnitMovement.Left; this.posX--;
                break;
            case UnitMovement.Right:
                this.movement = UnitMovement.Right; this.posX++;
                break;
            case UnitMovement.Up:
                this.movement = UnitMovement.Up; this.posY--;
                break;
            case UnitMovement.Down:
                this.movement = UnitMovement.Down; this.posY++;
                break;
        }
        this.movements.push(this.movement);
        this.steps = this.totalSteps;
    }

    // private setNewPos(direction:UnitMovement){
    //     switch (direction){
    //         case UnitMovement.Left:
    //             this.posX--;
    //             break;
    //         case UnitMovement.Right:
    //             this.posX++;
    //             break;
    //         case UnitMovement.Up:
    //             this.posY--;
    //             break;
    //         case UnitMovement.Down:
    //             this.posY++;
    //             break;
    //     }
    // }

    private setState(newPos:UnitMovement){
        if( this.map[this.posX][this.posY].type == TileType.Lava ){
            // Is on lava
            this.state = UnitState.Dead
        }
        else if( this.map[this.posX][this.posY].checkPoint != undefined && this.map[this.posX][this.posY].checkPoint?.isActivated ){
            // Is on a Check Point
            this.checkPoint = this.map[this.posX][this.posY].checkPoint
            this.checkPointWriteInConsoleAgain = this.checkPoint?.writeInConsoleAgain;
        }
    }
}

export enum UnitState{
    Alive,
    Dead,
}

export enum UnitMovement{
    Left,
    Right,
    Up,
    Down,
    Idle
}

export class Wizard extends Unit{
    constructor(posX: number, posY:number, totalCols:number, totalRows:number, mana:number, level?:Level) {
        super(posX, posY, totalCols, totalRows, level);
        this.mana = mana;
    }

    sprite = "./../../assets/img/witch.svg";

    public mana:number;

    getTile(pos:UnitMovement):Tile{
        var x = 0; var y = 0;
        if(pos = UnitMovement.Up){ y--; }
        if(pos = UnitMovement.Down){ y++; }
        if(pos = UnitMovement.Left){ x--; }
        if(pos = UnitMovement.Right){ x++; }
        return this.map[this.posX + x][this.posY + y];
    }

    getTileType(pos:UnitMovement){
        var x = 0; var y = 0;
        if(pos = UnitMovement.Up){ y--; }
        if(pos = UnitMovement.Down){ y++; }
        if(pos = UnitMovement.Left){ x--; }
        if(pos = UnitMovement.Right){ x++; }
        return TileType[this.map[this.posX + x][this.posY + y].type];
    }
}