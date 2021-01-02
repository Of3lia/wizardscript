import { Component, OnInit } from '@angular/core';
import { LEVELS } from 'src/app/data/levels';
import { Level } from 'src/app/models/gameModels';
import { LevelService } from 'src/app/services/level.service';
import { MapGeneratorService } from 'src/app/services/map-generator.service';

@Component({
  selector: 'app-levels-menu',
  templateUrl: './levels-menu.component.html',
  styleUrls: ['./levels-menu.component.scss']
})
export class LevelsMenuComponent implements OnInit {
  levels:Level[] = LEVELS;
  constructor(
    public mapGeneratorService:MapGeneratorService
  ) { }

  ngOnInit(): void {
  }

  setLevel(i:number){
    this.mapGeneratorService.setLevel(i);
  }
}
