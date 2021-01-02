import { Injectable } from '@angular/core';
import { delay } from 'rxjs/operators';
import { Unit, UnitState, Wizard } from '../models/gameModels';
import { ConsoleService } from './console.service';
import { MapGeneratorService } from './map-generator.service';

@Injectable({
  providedIn: 'root'
})
export class GameControllerService {

  disableRunScriptButton:boolean=false;

  units:Unit[] = this.mapGeneratorService.units;
  wizard:any = this.units[0];
  stopUpdate:boolean=false;
  updateInitiated:boolean=false;
  frameCount:number = 0;
  currentCheckPointStep:number = 0;
  constructor(
    private mapGeneratorService: MapGeneratorService,
  ) { }

  initUpdate(){
    if(!this.updateInitiated){
      this.loop();
      this.updateInitiated = true;
    }
  }

  private loop(){
    this.updateInitiated = true;
    // Inject This Service to Wizard
    setTimeout(() => {
      this.loop();
      this.update();
    }, 25);
  }

  private update(){
    if(this.stopUpdate){ return; } else {
      this.frameCount++;
      if(this.frameCount > 2000){return;}

      this.units.forEach(element => {
        element.update();
      });

      if(this.frameCount % 10 == 0){
        this.checkWizardState();
      }
    }
  }

  checkWizardState(){
    // If wizard is dead
    if(this.wizard.state == UnitState.Dead){
      window.alert("Wizard Died");
      this.stopUpdate = true;
    }
    // If wizard is in a Check Point
    else if(this.wizard.checkPoint != undefined){
      window.alert("check point");
      // Desactivate check point
      this.wizard.checkPoint.isActivated = false;
      // Add a step to checkpoint step counter
      this.currentCheckPointStep++;
      // Activate next check points
      this.mapGeneratorService.checkPoints?.forEach(element => {
        if(element.step == this.currentCheckPointStep){ element.isActivated = true; }
      });

      if(this.wizard.checkPointWriteInConsoleAgain == true ){
        this.activateConsoleAgain();
      }else{
        window.alert("Victory");
      }
      // Deactivate wizard check point holder
      this.wizard.checkPoint = undefined;
    }
  }

  activateConsoleAgain(){
    this.disableRunScriptButton=false;
  }
}
