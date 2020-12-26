import { PercentPipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { LEVELS } from '../data/levels';
import { Level, Tile } from '../models/gameModels';

@Injectable({
  providedIn: 'root'
})
export class MapGeneratorService {

  selectedLevel:Level = LEVELS[0];
  // map:Tile[] = [];
  tiles:Tile[] = [];
  cols:number = this.selectedLevel.cols;
  rows:number = this.selectedLevel.rows;
  nTiles:number = 0;
  
  constructor() { 
  }

  // generateMap(){
  //     // Initialize Tiles Array
  //     for(var i = 0; i < this.rows; i++){
  //       this.tiles.push(new Array(this.cols));
  //     }
  
  //     for(var i = 0; i < this.rows; i++){
  //       for(var j = 0; j < this.cols; j++){
  //         var newTile = new Tile(i,j);
  //         this.map.push(newTile);
  //         this.tiles[i][j] = newTile;
  //       }
  //     }
  // }

  initializeTiles(){
    this.nTiles = this.cols * this.rows;

    for(var i = 0; i < this.rows; i++){
      for(var j = 0; j < this.cols; j++){
        this.tiles.push(new Tile(i, j, this.cols, this.rows));
      }
    }
  }
}
