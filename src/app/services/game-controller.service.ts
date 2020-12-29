import { Injectable } from '@angular/core';
import { delay } from 'rxjs/operators';
import { Unit, Wizard } from '../models/gameModels';
import { MapGeneratorService } from './map-generator.service';

@Injectable({
  providedIn: 'root'
})
export class GameControllerService {

  units:Unit[] = this.mapGeneratorService.units;
  wizard:Unit = this.units[0];
  constructor(
    private mapGeneratorService: MapGeneratorService,
  ) { }

  initUpdate(){
    setTimeout(() => {
      this.initUpdate();
      this.update();
    }, 25);
  }

  private update(){
    // console.log('update');
    this.units.forEach(element => {
      element.update();
    });

    this.checkWizardCollisions();
  }

  private checkWizardCollisions(){
  }


}
