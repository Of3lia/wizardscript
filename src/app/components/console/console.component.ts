import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Unit, UnitMovement } from 'src/app/models/gameModels';
import { MapGeneratorService } from 'src/app/services/map-generator.service';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.scss']
})
export class ConsoleComponent implements OnInit {

  wizScript:any = 'this.wizard.moveTo("Left");';

  Left:UnitMovement=UnitMovement.Left;
  Right:UnitMovement=UnitMovement.Right;
  Up:UnitMovement=UnitMovement.Up;
  Down:UnitMovement=UnitMovement.Down;

  constructor(
    private mapGeneratorService:MapGeneratorService
  ) { }

  wizard:Unit = this.mapGeneratorService.units[0];

  ngOnInit(): void {
  }

  runScript(){

    try{
      eval(this.wizScript);
    }
    catch(e){
      console.log("You lose, error in compilation: " + e );
    }
  }
}
