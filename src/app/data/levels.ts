import { MapGeneratorService } from './../services/map-generator.service';
import { Level, Tile, Unit, Wizard, TileType } from '../models/gameModels';

export const LEVELS: Level[] = [
    { levelNumber:1, cols: 5, rows:5, 
       tiles:[
            new Tile(0,0,5,5),
            new Tile(0,1,5,5),
            new Tile(0,2,5,5),
            new Tile(0,3,5,5),
            new Tile(0,4,5,5),

            new Tile(1,0,5,5,TileType.Lava),
            new Tile(1,1,5,5,TileType.Lava),
            new Tile(1,2,5,5,TileType.Lava),
            new Tile(1,3,5,5),
            new Tile(1,4,5,5),

            new Tile(2,0,5,5,TileType.Water),
            new Tile(2,1,5,5),
            new Tile(2,2,5,5),
            new Tile(2,3,5,5),
            new Tile(2,4,5,5),

            new Tile(3,0,5,5),
            new Tile(3,1,5,5),
            new Tile(3,2,5,5),
            new Tile(3,3,5,5),
            new Tile(3,4,5,5),

            new Tile(4,0,5,5),
            new Tile(4,1,5,5),
            new Tile(4,2,5,5),
            new Tile(4,3,5,5),
            new Tile(4,4,5,5),
    ], units:[
        new Wizard(2,2,5,5),
    ] }
]