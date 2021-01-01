import { Injectable } from '@angular/core';
import { GameControllerService } from './game-controller.service';

@Injectable({
  providedIn: 'root'
})
export class ConsoleService {

  wizardMana: number;

  constructor(
    private gameController: GameControllerService,
  ) { 
    this.wizardMana = gameController.wizard.mana;
  }
}
