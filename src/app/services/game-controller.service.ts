import { Injectable } from '@angular/core';
import { delay } from 'rxjs/operators';
import { Unit, UnitState, Wizard } from '../models/gameModels';
import { MapGeneratorService } from './map-generator.service';

@Injectable({
  providedIn: 'root'
})
export class GameControllerService {

  units:Unit[] = this.mapGeneratorService.units;
  wizard:Unit = this.units[0];
  stopUpdate:boolean=false;
  frameCount:number = 0;
  constructor(
    private mapGeneratorService: MapGeneratorService,
  ) { }

  initUpdate(){
    // Inject This Service to Wizard

    setTimeout(() => {
      this.initUpdate();
      this.update();
    }, 25);
  }

  private update(){
    if(!this.stopUpdate){
    this.frameCount++;
    if(this.frameCount > 1000){return;}

    this.units.forEach(element => {
      element.update();
    });

    if(this.frameCount % 10 == 0){
      this.checkWizardState();
    }

    } else { return; }
  }

  checkWizardState(){
    if(this.wizard.state == UnitState.Dead){
      window.alert("Wizard Died");
      this.stopUpdate = true;
    }
  }

}
