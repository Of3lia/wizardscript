import { MapGeneratorService } from './../services/map-generator.service';
import { Level, Tile, Unit, Wizard, TileType, CheckPoint, Dialog } from '../models/gameModels';

export const LEVELS: Level[] = [
    { levelNumber:1, title:"Walking in circles", cols: 5, rows:5, 
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
        ],
         units:[
            new Wizard(2,2,5,5, 100),
        ],
         checkPoints:[
            new CheckPoint(3,2,5,5,0,true),
            new CheckPoint(3,1,5,5,1,true),
            new CheckPoint(2,1,5,5,2,true),
            new CheckPoint(2,2,5,5,3)
        ],
         dialogs:[
             new Dialog(0, `Ratpenat:   \u00A0\u00A0 \"Oh fuck, the evil wizards of Evenur have attacked me and now I have lost all my powers. 
             I need to get to the cursed forest fast... but i can only do very little magic\"`),
         ],
         helpText: `To move write in the console: <br><br> \u00A0\u00A0 wizard.MoveTo(left); --> moves to the left. <br><br> Possible values 
         are left, right, up and down. <br><br> To restart the level, press the restart button in the console, or F5`,
    },
    { levelNumber:2, title:"There is a long way", cols: 10, rows:6, 
        tiles:[
             new Tile(0,0,6,6),
             new Tile(0,1,6,6),
             new Tile(0,2,6,6),
             new Tile(0,3,6,6),
             new Tile(0,4,6,6),
             new Tile(0,5,6,6),

             new Tile(1,0,6,6),
             new Tile(1,1,6,6),
             new Tile(1,2,6,6),
             new Tile(1,3,6,6),
             new Tile(1,4,6,6),
             new Tile(1,5,6,6),

             new Tile(2,0,6,6),
             new Tile(2,1,6,6),
             new Tile(2,2,6,6),
             new Tile(2,3,6,6),
             new Tile(2,4,6,6),
             new Tile(2,5,6,6),

             new Tile(3,0,6,6),
             new Tile(3,1,6,6),
             new Tile(3,2,6,6),
             new Tile(3,3,6,6),
             new Tile(3,4,6,6),
             new Tile(3,5,6,6),

             new Tile(4,0,6,6),
             new Tile(4,1,6,6),
             new Tile(4,2,6,6),
             new Tile(4,3,6,6),
             new Tile(4,4,6,6),
             new Tile(4,5,6,6),

             new Tile(5,0,6,6),
             new Tile(5,1,6,6),
             new Tile(5,2,6,6),
             new Tile(5,3,6,6),
             new Tile(5,4,6,6),
             new Tile(5,5,6,6),
 
     ], units:[
         new Wizard(2,2,6,6, 100),
     ] }
]