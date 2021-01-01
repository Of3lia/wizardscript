import { PercentPipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { LEVELS } from '../data/levels';
import { CheckPoint, Level, Tile, Unit } from '../models/gameModels';

@Injectable({
  providedIn: 'root'
})
export class MapGeneratorService {

  selectedLevel:Level = LEVELS[0];
  public tiles:Tile[] = [];
  public map:Tile[][] = [];
  cols:number = this.selectedLevel.cols;
  rows:number = this.selectedLevel.rows;
  units:Unit[] = this.selectedLevel.units;
  wizard:Unit = this.units[0];
  checkPoints?:CheckPoint[] = this.selectedLevel.checkPoints;

  constructor() { 
  }

  initializeTiles(){
    // Populate World Tiles
    this.selectedLevel.tiles.forEach(tile => {
      this.tiles.push(tile);
      this.checkPoints?.forEach(checkPoint => {
        if(tile.posX == checkPoint.posX && tile.posY == checkPoint.posY){
          tile.checkPoint = checkPoint;
          if(checkPoint.step === 0){ checkPoint.isActivated = true; }
        }
      });
    });



    // // Initialize Map
    // this.map = new Array(this.cols);
    // var k:number = 0;
    // for(var i = 0; i < this.rows; i++){
    //     this.map[i] = new Array(this.rows);
    //     for(var j = 0; j < this.cols; j++){
    //       this.map[i][j] = this.tiles[k]; k++;
    //     }
    //   }


    // Inject Level to wizard
    this.wizard.level = this.selectedLevel;
  }
}
