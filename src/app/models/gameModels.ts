import { getCurrencySymbol } from '@angular/common';
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

export class Tile{
    constructor(posX: number, posY:number, totalCols:number, totalRows:number, type:TileType = TileType.Grass) {

        if(posX != 0){
            this.percentX = ((posX * 100) / totalCols).toString() + '%';
        }
        if(posY != 0){
            this.percentY = ((posY * 100) / totalRows).toString() + '%';
        }

        this.width = (100 / totalCols).toString() + '%';
        this.height = (100 / totalRows).toString() + '%';

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

    public posX: number = 0;
    public posY: number = 0;
    public percentX: string = '0%';
    public percentY: string = '0%';


    width:string = '';
    height:string = '';

    type:TileType;
    public color:string = 'rgb(100, 180, 80)';
}

export enum TileType{
    Grass,
    Water,
    Lava
}

export class Unit{
    constructor(posX: number, posY:number, tiles: Tile[], mapGenSvc:MapGeneratorService) {
        this.posX = posX;
        this.posY = posY;
        tiles = mapGenSvc.tiles;
    }
    posX:number;
    posY:number;
    percentX:string = '0%';
    percentY:string = '0%';

    initUnit(tiles:Tile[]){
        tiles.forEach(element => {
            if(element.posX == this.posX && element.posX == this.posY){
                this.percentX = element.percentX;
                this.percentY = element.percentY;
            }
        });
    }
}

export class Wizard extends Unit{
    constructor(posX:number, posY:number, tiles:Tile[], mapGenSvc:MapGeneratorService) {
        super(posX, posY, tiles, mapGenSvc);
    }
}