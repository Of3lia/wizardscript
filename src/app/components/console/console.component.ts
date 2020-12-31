import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Unit, UnitMovement } from 'src/app/models/gameModels';
import { GameControllerService } from 'src/app/services/game-controller.service';
import { MapGeneratorService } from 'src/app/services/map-generator.service';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.scss']
})
export class ConsoleComponent implements OnInit {

  wizScript:any = `wizard.moveTo("Right");\nwizard.moveTo("Up");\nwizard.moveTo("Left");\nwizard.moveTo("Down");\n`;
  Left:UnitMovement=UnitMovement.Left;
  Right:UnitMovement=UnitMovement.Right;
  Up:UnitMovement=UnitMovement.Up;
  Down:UnitMovement=UnitMovement.Down;

  disableButton:boolean=false;

  constructor(
    private mapGeneratorService:MapGeneratorService,
    private gameControllerService:GameControllerService,
  ) { }

  wizard:Unit = this.mapGeneratorService.units[0];

  ngOnInit(): void {
  }

  runScript(){
    this.disableButton=true;
    try{
      this.gameControllerService.initUpdate();
      eval(`var wizard = this.wizard;` + this.wizScript);
    }
    catch(e){
      console.log("You lose, error in compilation: " + e );
    }
  }
}
