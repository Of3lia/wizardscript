import { MapGeneratorService } from './../services/map-generator.service';
import { Level, Tile, Unit, Wizard, TileType, CheckPoint, Dialog } from '../models/gameModels';

export const LEVELS: Level[] = [
    { levelNumber:1, title:"Walking in circles", cols: 4, rows:4, 
       tiles:[
            new Tile(0,0,4,4),
            new Tile(0,1,4,4),
            new Tile(0,2,4,4),
            new Tile(0,3,4,4),

            new Tile(1,0,4,4),
            new Tile(1,1,4,4),
            new Tile(1,2,4,4),
            new Tile(1,3,4,4),

            new Tile(2,0,4,4),
            new Tile(2,1,4,4),
            new Tile(2,2,4,4),
            new Tile(2,3,4,4),

            new Tile(3,0,4,4),
            new Tile(3,1,4,4),
            new Tile(3,2,4,4),
            new Tile(3,3,4,4),
        ],
         units:[
            new Wizard(1,2,4,4,21),
        ],
         checkPoints:[
            new CheckPoint(2,2,4,4,0,true),
            new CheckPoint(2,1,4,4,1,true),
            new CheckPoint(1,1,4,4,2,true),
            new CheckPoint(1,2,4,4,3)
        ],
         dialogs:[
             new Dialog(0, `<u>Ratpenat The Witch:</u> <br><br> \u00A0 \"The evil wizards of Evenur have attacked me and now I have lost all my powers. 
             I need to get to the cursed forest fast... but i can only do very little magic\"`),
             new Dialog(1, `<br>- Ok now i need to move up...`),
             new Dialog(2, `<br>- Damm! I forgot my glasses! I need to go left`),
             new Dialog(3, `<br>- I feel like im walking in circles.. now I need to go down`),
             new Dialog(4, `<br>- There are my glasses! At least i found them..`),
         ],
         helpText: `To move write in the console: <br><br> \u00A0\u00A0 wizard.moveTo(left); --> moves to the left. <br><br> Possible values 
         are left, right, up and down. <br><br> To restart the level, press the restart button in the console, or F5`,
    },
    { levelNumber:2, title:"There is a long way", cols: 6, rows:6, 
        tiles:[
             new Tile(0,0,6,6,TileType.Water),
             new Tile(0,1,6,6,TileType.Water),
             new Tile(0,2,6,6),
             new Tile(0,3,6,6),
             new Tile(0,4,6,6),
             new Tile(0,5,6,6),

             new Tile(1,0,6,6,TileType.Water),
             new Tile(1,1,6,6,TileType.Water),
             new Tile(1,2,6,6),
             new Tile(1,3,6,6),
             new Tile(1,4,6,6),
             new Tile(1,5,6,6),

             new Tile(2,0,6,6,TileType.Water),
             new Tile(2,1,6,6,TileType.Water),
             new Tile(2,2,6,6),
             new Tile(2,3,6,6),
             new Tile(2,4,6,6),
             new Tile(2,5,6,6),

             new Tile(3,0,6,6,TileType.Water),
             new Tile(3,1,6,6,TileType.Water),
             new Tile(3,2,6,6),
             new Tile(3,3,6,6),
             new Tile(3,4,6,6),
             new Tile(3,5,6,6),

             new Tile(4,0,6,6,TileType.Water),
             new Tile(4,1,6,6,TileType.Water),
             new Tile(4,2,6,6),
             new Tile(4,3,6,6),
             new Tile(4,4,6,6),
             new Tile(4,5,6,6),

             new Tile(5,0,6,6,TileType.Water),
             new Tile(5,1,6,6,TileType.Water),
             new Tile(5,2,6,6),
             new Tile(5,3,6,6),
             new Tile(5,4,6,6),
             new Tile(5,5,6,6),
 
     ], units:[
         new Wizard(0,3,6,6, 42),
     ], checkPoints:[
         new CheckPoint(5,3,6,6,0),
     ], dialogs:[
         new Dialog(0, "- Oh im so tired, and i have to go far. I'll need some kind of loop magic"),
         new Dialog(1, "<br>- Good!"),
     ], helpText:`Loop spell: <br> <br>  for(var i = 0; i < 5; i++) { <br> Movement spell <br> } `
    },
    { levelNumber:3, title:"Up hill", cols: 6, rows:6, 
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
        new Wizard(0,5,6,6, 60),
    ], checkPoints:[
        new CheckPoint(5,0,6,6,0),
    ], dialogs:[
        new Dialog(0, "- This seems tricky, probably i will need a loop spell more complex than the last one"),
        new Dialog(1, "<br>- Good!"),
    ], helpText:`Loop spell: <br> <br>  for(var i = 0; i < 5; i++) { <br> Movement spell <br> } `
    },
    { levelNumber:4, title:"Rivers of lava", cols: 6, rows:6, 
    tiles:[
         new Tile(0,0,6,6),
         new Tile(0,1,6,6,TileType.Lava),
         new Tile(0,2,6,6,TileType.Lava),
         new Tile(0,3,6,6,TileType.Lava),
         new Tile(0,4,6,6),
         new Tile(0,5,6,6),

         new Tile(1,0,6,6),
         new Tile(1,1,6,6,TileType.Lava),
         new Tile(1,2,6,6,TileType.Lava),
         new Tile(1,3,6,6),
         new Tile(1,4,6,6),
         new Tile(1,5,6,6),

         new Tile(2,0,6,6,TileType.Lava),
         new Tile(2,1,6,6,TileType.Lava),
         new Tile(2,2,6,6,TileType.Lava),
         new Tile(2,3,6,6),
         new Tile(2,4,6,6,TileType.Lava),
         new Tile(2,5,6,6,TileType.Lava),

         new Tile(3,0,6,6,TileType.Lava),
         new Tile(3,1,6,6,TileType.Lava),
         new Tile(3,2,6,6,TileType.Lava),
         new Tile(3,3,6,6),
         new Tile(3,4,6,6,TileType.Lava),
         new Tile(3,5,6,6,TileType.Lava),

         new Tile(4,0,6,6),
         new Tile(4,1,6,6),
         new Tile(4,2,6,6),
         new Tile(4,3,6,6),
         new Tile(4,4,6,6,TileType.Lava),
         new Tile(4,5,6,6,TileType.Lava),

         new Tile(5,0,6,6),
         new Tile(5,1,6,6,TileType.Lava),
         new Tile(5,2,6,6,TileType.Lava),
         new Tile(5,3,6,6,TileType.Lava),
         new Tile(5,4,6,6,TileType.Lava),
         new Tile(5,5,6,6,TileType.Lava),
    ], units:[
        new Wizard(0,5,6,6, 106),
    ], checkPoints:[
        new CheckPoint(5,0,6,6,0),
    ], dialogs:[
        new Dialog(0, "- I dont remember this rivers of lava on the area, something evil is happening, I need to hurry..."),
        new Dialog(1, "<br>- Good!"),
    ], helpText:`for (var i = 0; i < 10; i++){

        if (witch.getTileType(right)=="Lava"){witch.moveTo(up);}
         else{witch.moveTo(right);}
     
     }
      `
    },
    { levelNumber:5, title:"How did I end here...", cols: 6, rows:6, 
    tiles:[
         new Tile(0,0,6,6),
         new Tile(0,1,6,6),
         new Tile(0,2,6,6),
         new Tile(0,3,6,6),
         new Tile(0,4,6,6),
         new Tile(0,5,6,6),

         new Tile(1,0,6,6),
         new Tile(1,1,6,6,TileType.Lava),
         new Tile(1,2,6,6,TileType.Lava),
         new Tile(1,3,6,6),
         new Tile(1,4,6,6,TileType.Lava),
         new Tile(1,5,6,6),

         new Tile(2,0,6,6),
         new Tile(2,1,6,6,TileType.Lava),
         new Tile(2,2,6,6),
         new Tile(2,3,6,6),
         new Tile(2,4,6,6,TileType.Lava),
         new Tile(2,5,6,6),

         new Tile(3,0,6,6),
         new Tile(3,1,6,6,TileType.Lava),
         new Tile(3,2,6,6,TileType.Lava),
         new Tile(3,3,6,6,TileType.Lava),
         new Tile(3,4,6,6,TileType.Lava),
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
        new Wizard(2,2,6,6, 106),
    ], checkPoints:[
        new CheckPoint(5,0,6,6,0),
    ], dialogs:[
        new Dialog(0, "- I dont remember this rivers of lava on the area, something evil is happening, I need to hurry..."),
        new Dialog(1, "<br>- Good!"),
    ], helpText:`for (var i = 0; i < 10; i++){

        if (wizard.getTileType(right)=="Lava"){wizard.moveTo(up);}
         else{wizard.moveTo(right);}
     
     }
      `
    },
]