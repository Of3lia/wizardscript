import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Unit, UnitMovement } from 'src/app/models/gameModels';
import { GameControllerService } from 'src/app/services/game-controller.service';
import { MapGeneratorService } from 'src/app/services/map-generator.service';
import {NgbProgressbarConfig} from '@ng-bootstrap/ng-bootstrap';
import { ConsoleService } from './../../services/console.service';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.scss']
})
export class ConsoleComponent implements OnInit {

  wizScript:any = `wizard.moveTo(right);`;
  Left:UnitMovement=UnitMovement.Left;
  Right:UnitMovement=UnitMovement.Right;
  Up:UnitMovement=UnitMovement.Up;
  Down:UnitMovement=UnitMovement.Down;

  model = 1;
  constructor(
    public mapGeneratorService:MapGeneratorService,
    public gameControllerService:GameControllerService,
    private config: NgbProgressbarConfig,
    public consoleService: ConsoleService,
  ) { 
    config.striped = true;
    config.animated = true;
  }

  wizard:Unit = this.mapGeneratorService.units[0];
  wizardMana:number = this.consoleService.wizardMana;
  consumedMana:number = 0;
  leftMana:number = this.wizardMana;
  leftManaPercent:number = this.leftMana;
  right:UnitMovement=UnitMovement.Right;
  left:UnitMovement=UnitMovement.Left;
  down:UnitMovement=UnitMovement.Down;
  up:UnitMovement=UnitMovement.Up;

  ngOnInit(): void {
    this.calculateMana();
  }

  runScript(){
    this.gameControllerService.disableRunScriptButton=true;
    try{
      this.gameControllerService.initUpdate();
      eval(`var wizard = this.wizard;
       var right = this.right;
       var left = this.left;
       var up = this.up;
       var down = this.down;
       ` + this.wizScript);
    }
    catch(e){
      console.log("You lose, error in compilation: " + e );
      window.alert("You lose, error in compilation: " + e );
    }
  }

  restart(){
    location.reload();    
  }

  calculateMana(){
    this.consumedMana = this.wizScript.replace(/\s/g, '').length;
    this.leftMana = this.wizardMana - this.consumedMana;
    this.leftManaPercent = 100 - (100 * this.consumedMana / 150);
  }
}
