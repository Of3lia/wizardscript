import { PercentPipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { LEVELS } from '../data/levels';
import { CheckPoint, Level, Tile, Unit } from '../models/gameModels';

@Injectable({
  providedIn: 'root'
})
export class MapGeneratorService {

  levels:Level[] = LEVELS;
  selectedLevel:Level = LEVELS[localStorage.level];
  public tiles:Tile[] = [];
  public map:Tile[][] = [];
  cols:number = this.selectedLevel.cols;
  rows:number = this.selectedLevel.rows;
  units:Unit[] = this.selectedLevel.units;
  wizard:Unit = this.units[0];
  checkPoints?:CheckPoint[] = this.selectedLevel.checkPoints;

  constructor() { 
  }

  
  setLevel(i:number){
    this.selectedLevel = LEVELS[i];
    this.tiles = [];
    this.map = [];
    this.cols = this.selectedLevel.cols;
    this.rows = this.selectedLevel.rows;
    this.units = this.selectedLevel.units;
    this.wizard = this.units[0];
    this.checkPoints = this.selectedLevel.checkPoints;
    this.initializeTiles();
  }

  initializeTiles(){
    var lvl = parseInt(localStorage.level);
    this.selectedLevel=LEVELS[lvl]
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
    // Inject Level to wizard
    this.wizard.level = this.selectedLevel;
  }
}
