import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Unit, UnitMovement, Wizard } from 'src/app/models/gameModels';
import { GameControllerService } from 'src/app/services/game-controller.service';
import { MapGeneratorService } from 'src/app/services/map-generator.service';
import {NgbProgressbarConfig} from '@ng-bootstrap/ng-bootstrap';
import { ConsoleService } from './../../services/console.service';
import { LevelService } from 'src/app/services/level.service';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.scss']
})
export class ConsoleComponent implements OnInit {
  
  wizScript:any;
  Left:UnitMovement=UnitMovement.Left;
  Right:UnitMovement=UnitMovement.Right;
  Up:UnitMovement=UnitMovement.Up;
  Down:UnitMovement=UnitMovement.Down;

  constructor(
    public mapGeneratorService:MapGeneratorService,
    public gameControllerService:GameControllerService,
    private config: NgbProgressbarConfig,
    public consoleService: ConsoleService,
    public levelService:LevelService,
  ) { 
    config.striped = true;
    config.animated = true;
  }

  witch:Wizard = this.mapGeneratorService.units[0] as Wizard;
  totalMana:number = this.witch.mana;
  consumedMana:number = 0;
  leftMana:number = this.totalMana;
  leftManaPercent:number = this.leftMana;
  right:UnitMovement=UnitMovement.Right;
  left:UnitMovement=UnitMovement.Left;
  down:UnitMovement=UnitMovement.Down;
  up:UnitMovement=UnitMovement.Up;

  ngOnInit(): void {
    if(localStorage.getItem("wizScript") == undefined){
      localStorage.setItem("wizScript", `witch.moveTo(right);`)
    }
    this.wizScript = localStorage.getItem("wizScript")

    this.calculateMana();
  }

  runScript(){
    this.gameControllerService.disableRunScriptButton=true;
    try{
      this.gameControllerService.initUpdate();
      eval(`var witch = this.witch;
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
    this.leftMana = this.totalMana - this.consumedMana;
    this.leftManaPercent = 100 - (100 * this.consumedMana / this.totalMana);
    this.saveCode();
  }
  
  saveCode(){
    localStorage.setItem("wizScript", this.wizScript);
    this.wizScript = localStorage.getItem("wizScript");
  }
}
