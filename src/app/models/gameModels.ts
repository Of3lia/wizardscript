import { getCurrencySymbol } from '@angular/common';
import { LEVELS } from '../data/levels';
import { MapGeneratorService } from './../services/map-generator.service';

export class Level{
    constructor(levelNumber:number, rows:number, cols:number, tiles:Tile[]) {
        this.levelNumber = levelNumber;
        this.rows = rows;
        this.cols = cols;
        this.tiles = tiles;
    }
    levelNumber:number;
    rows: number;
    cols: number;
    tiles:Tile[];
    units:Unit[] = [];
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
        this.speed = this.percX / this.totalSteps / 2;

    }
    totalCols:number;
    totalRows:number;

    private movement:UnitMovement = UnitMovement.Idle;

    totalSteps:number;
    steps:number;
    speed:number;
    movements:UnitMovement[] = [];

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
                this.movements.shift();
                if(this.movements.length > 0){ this.steps = this.totalSteps; } else { this.movement = UnitMovement.Idle; }
                this.checkDanger(this.movement);
            }
        }
    }

    public moveTo(direction:string){
        switch (direction){
            case UnitMovement[0]:
                this.movement = UnitMovement.Left;
                break;
            case UnitMovement[1]:
                this.movement = UnitMovement.Right;
                break;
            case UnitMovement[2]:
                this.movement = UnitMovement.Up;
                break;
            case UnitMovement[3]:
                this.movement = UnitMovement.Down;
                break;
        }
        this.movements.push(this.movement);
        this.steps = this.totalSteps;
        this.setNewPos(this.movements[0])
    }

    private setNewPos(direction:UnitMovement){
        switch (direction){
            case UnitMovement.Left:
                this.posX--;
                break;
            case UnitMovement.Right:
                this.posX++;
                break;
            case UnitMovement.Up:
                this.posY--;
                break;
            case UnitMovement.Down:
                this.posY++;
                break;
        }
        console.log(this.posX, this.posY);
    }

    private checkDanger(newPos:UnitMovement){
        if( this.map[this.posX][this.posY].type == TileType.Lava ){
            window.alert("Wizard tried to walk in lava");
        }
    }
}

export enum UnitMovement{
    Left,
    Right,
    Up,
    Down,
    Idle
}

export class Wizard extends Unit{
    constructor(posX: number, posY:number, totalCols:number, totalRows:number, level?:Level) {
        super(posX, posY, totalCols, totalRows, level);
    }
}